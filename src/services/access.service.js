"use strict";

const shopsModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const KeyTokenServices = require("./keyToken.service");
const { createTokenPair } = require("../auth/authUtils");
const rolesShop = {
  SHOP: "SHOP",
  WRITER: "WRITER",
  EDITOR: "EDITOR",
  ADMIN: "ADMIN",
};

class AccessServices {
  static signUp = async ({ name, email, password }) => {
    try {
      // steps 1 : check email exists ??
      console.log("hahaha", { name, email, password });
      const checkEmail = await shopsModel.findOne({ email }).lean();
      console.log("checkEmailcheckEmail", checkEmail);
      if (checkEmail) {
        return {
          code: "xxx",
          message: "Shop already exists!",
        };
      }

      const hashPass = await bcrypt.hash(password, 10);

      const newShop = await shopsModel.create({
        name,
        email,
        password: hashPass,
        roles: [rolesShop.SHOP],
      });

      if (newShop) {
        const { privateKey, publicKey } = await crypto.generateKeyPairSync(
          "rsa",
          {
            modulusLength: 4096,
          }
        );
        console.log("hahahaha", { privateKey, publicKey });

        const publicKeyString = await KeyTokenServices.createKeyToken({
          userId: newShop._id,
          publicKey,
        });

        if (!publicKeyString) {
          return {
            code: "xxx",
            message: "publicKey error",
          };
        }
        const tokens = await createTokenPair(
          { userId: newShop._id, email },
          privateKey,
          publicKey
        );

        console.log("created token success", tokens);

        return {
          code: 201,
          metadata: {
            shop: newShop,
            tokens,
          },
        };
      }

      return {
        code: 201,
        metadata: null,
      };
    } catch (error) {
      return {
        code: "xxx",
        message: error.message,
        status: "error",
      };
    }
  };
}

module.exports = AccessServices;
