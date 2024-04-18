// Hàm trả về một promise sẽ hoàn thành sau một khoảng thời gian nhất định
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise hoàn thành sau ${ms}ms`);
    }, ms);
  });
}

// Hàm trả về một promise sẽ bị từ chối sau một khoảng thời gian nhất định
function rejectAfter(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Promise bị từ chối sau ${ms}ms`);
    }, ms);
  });
}

const xxx = async () => {
  // Sử dụng Promise.race() để chờ đợi promise nhanh nhất
  return await Promise.all([delay(500), rejectAfter(1000)])
    .then((result) => {
      console.log("Thành công:", result); // Nên hiển thị "Thành công: Promise bị từ chối sau 1000ms"
    })
    .catch((error) => {
      console.error("Lỗi:", error); // Nên hiển thị "Lỗi: Promise bị từ chối sau 1000ms"
    });
};

xxx()
  .then((x) => {
    console.log("x,", x);
  })
  .catch((err) => {
    console.log("err", err);
  });
