export async function getAllProperties() {
    let mockData = require('../assets/data.json');
    return mockData;
}

export async function getPropertyDetail(id) {
    let mockData;

    switch (id) {
        case 1:
            mockData = require('../assets/house1.json');
            break;
        case 2:
            mockData = require('../assets/house2.json');
            break;
        case 3:
            mockData = require('../assets/house3.json');
            break;
        case 4:
            mockData = require('../assets/house4.json');
            break;
        case 5:
            mockData = require('../assets/house5.json');
            break;
        case 6:
            mockData = require('../assets/house6.json');
            break;
        default:
            mockData = require('../assets/house7.json');
            break;
    }
    return mockData;
}
