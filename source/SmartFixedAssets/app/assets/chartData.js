// Mock data object used for LineChart

export const chartData = {
    labels: ['1990', '2000', '2010', '2015', '2017', '2019', '2020'],
    datasets: [{
        data: [
            50,
            80,
            85,
            88,
            80,
            100,
            120
        ],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
    },]
}