// Mock data object used for LineChart

export const chartData = {
    labels: ['1990', '2000', '2010', '2015', '2017', '2019'],
    datasets: [{
        data: [
            90,
            110,
            100,
            150,
            155,
            170,
        ],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
    },]
}