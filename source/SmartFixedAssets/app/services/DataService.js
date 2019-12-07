import React from 'react';

export async function getAllProperties() {
    let mockData = require('../assets/data.json');
    return mockData;
}

export async function getPropertyDetail(id) {
    if (id % 2 == 1)
        id = 1;
    else { id = 2 };

    let jsonFilePath = "../assets/" + "house" + id + ".json";
    let mockData = require(jsonFilePath);
    return mockData;
}
