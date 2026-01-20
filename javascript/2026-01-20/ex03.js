/*
* book taxi
*
* 41 tran duy hung -> dai hoc back khoa
*
* click "ok"
*
* -> find some drivers (nearest and free)
* */


const user = {
    id: 1,
    name: 'Tran Xuan Banh',
    long: 105.8213,
    lat: 21.0196
}

const findNearestDriver = (curLong, curLat) => {
    const drivers = [
        { id: 1, name: "Nguyen Van A", long: 105.8342, lat: 21.0278, isFree: true },
        { id: 2, name: "Tran Van B", long: 105.8411, lat: 21.0302, isFree: false },
        { id: 3, name: "Le Van C", long: 105.8295, lat: 21.0251, isFree: true },
        { id: 4, name: "Pham Van D", long: 105.8456, lat: 21.0328, isFree: true },
        { id: 5, name: "Hoang Van E", long: 105.8203, lat: 21.0199, isFree: false }
    ];

    let nearestDriver;
    let minDistance = 0;

    for (const driver of drivers) {
        // Chỉ xét những tài xế đang rảnh
        if (driver.isFree) {
            // Tính khoảng cách bằng công thức Euclid
            const distance = ((driver.long - curLong) ** 2 + (driver.lat - curLat) ** 2) ** 0.5;

            // Nếu tìm thấy tài xế có khoảng cách nhỏ hơn khoảng cách nhỏ nhất hiện tại
            if (distance < minDistance) {
                minDistance = distance;
                nearestDriver = driver;
            }
        }
    }

    return nearestDriver;
};

// Thực thi
const result = findNearestDriver(user.long, user.lat);
console.log("Nearest Driver found:", result);