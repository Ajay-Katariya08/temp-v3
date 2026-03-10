/**
 * Template Name: __name__ - Admin & Dashboard Template
 * By (Author): __author__
 * Module/App (File Name): Dashboard
*/

//
// REVENUE AREA CHART
//
///

new CustomApexChart({
    selector: "#revenue-chart",
    options: () => ({
        series: [
            {
                name: "Website Traffic",
                type: "bar",
                data: [
                    89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36, 88.51, 36.57,
                ],
            }, {
                name: "Active Users",
                type: "bar",
                data: [
                    22.25, 24.58, 36.74, 22.87, 19.54, 25.03, 29.24, 10.57, 24.57, 35.36, 20.51, 17.57,
                ],
            }, {
                name: "Conversion Rate",
                type: "area",
                data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
            },
            {
                name: "Revenue Growth",
                type: "line",
                data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
            },
        ],
        chart: {
            height: 251,
            type: "line",
            toolbar: {
                show: false,
            },
        },
        stroke: {
            dashArray: [0, 0, 0, 8],
            width: [0, 0, 2, 2],
            curve: 'smooth'
        },
        fill: {
            opacity: [1, 1, 0.1, 1],
            type: ['gradient', 'solid', 'solid', 'solid'],
            gradient: {
                type: "vertical",
                //   shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 70]
            },
        },
        markers: {
            size: [0, 0, 0, 0],
            strokeWidth: 2,
            hover: {
                size: 4,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            stepSize: 25,
            min: 0,
            labels: {
                formatter: function (val) {
                    return val + "k";
                },
                offsetX: -15
            },
            axisBorder: {
                show: false,
            }
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: -15,
                right: -15,
                bottom: 0,
                left: -15,
            },
        },
        legend: {
            offsetY: 10,
        },
        plotOptions: {
            bar: {
                columnWidth: "50%",
                barHeight: "70%",
                borderRadius: 3,
            },
        },
        colors: [theme("chart-primary"), theme("chart-secondary"), theme("chart-alpha"), theme("chart-gamma")],
        tooltip: {
            shared: true,
            y: [{
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return "$" + y.toFixed(2) + "k";
                    }
                    return y;
                },
            },
            {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return "$" + y.toFixed(2) + "k";
                    }
                    return y;
                },
            },
            {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return "$" + y.toFixed(2) + "k";
                    }
                    return y;
                },
            },
            {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return "$" + y.toFixed(2) + "k";
                    }
                    return y;
                },
            },
            ],
        }
    }),
})

//
// SIMPLE BUBBLE CHART
//
function generateData(baseval, count, yrange) {
    let i = 0
    const series = []
    while (i < count) {
        const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15

        series.push([x, y, z])
        baseval += 86400000
        i++
    }
    return series
}

new CustomApexChart({
    selector: "#simple-bubble",
    options: () => ({
        chart: {
            height: 338,
            type: "bubble",
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        series: [
            {
                name: "Website Visitors",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 10, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: "App Users",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 10, {
                    min: 10,
                    max: 60,
                }),
            },
            {
                name: "Social Media",
                data: generateData(new Date("11 Feb 2017 GMT").getTime(), 10, {
                    min: 10,
                    max: 60,
                }),
            },
        ],
        fill: {
            opacity: 0.8,
            gradient: {
                enabled: false,
            },
        },
        colors: [theme("chart-primary"), theme("chart-alpha"), theme("chart-gamma")],
        xaxis: {
            tickAmount: 12,
            type: "category",
        },
        yaxis: {
            max: 70,
        },
        grid: {
            borderColor: [theme("chart-border-color")],
            padding: {
                top: -20,
                right: 0,
                bottom: -5,
                left: 10,
            },
        },
        legend: {
            offsetY: 15,
        },
    }),
})

//
// MULTIPLE RADIALBARS
//
new CustomApexChart({
    selector: "#multiple-radialbar",
    options: () => ({
        chart: {
            height: 242,
            type: "radialBar",
            sparkline: { enabled: true }
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: function (val, opts) {
                    return opts.w.config.labels[opts.seriesIndex] + ": " + val + "%";
                }
            }
        },
        plotOptions: {
            circle: {
                dataLabels: {
                    showOn: "hover",
                },
            },
            radialBar: {
                track: {
                    margin: 20,
                    background: "rgba(170,184,197, 0.2)",
                },
                hollow: {
                    size: "1%",
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    },
                    style: {
                        fontSize: "14px",
                        fontWeight: 500,
                    },
                },
            },
        },
        stroke: {
            lineCap: "round",
        },
        grid: {
            padding: {
                top: -20,
                bottom: -20,
                left: -20,
                right: -20,
            }
        },
        series: [75, 60, 85],
        labels: ["Sales Target", "Marketing Reach", "Product Launch Milestone"],
        responsive: [
            {
                breakpoint: 380,
                options: {
                    chart: {
                        height: 180,
                    },
                },
            },
        ],
        colors: [theme("chart-secondary"), theme("chart-delta"), theme("chart-primary")],
    }),
})

class VectorMap {
    init() {
        this.initUsMap()
    }

    initVectorMap(selector, options = {}) {
        let element = null

        if (selector instanceof Element) {
            element = selector
        } else {
            element = document.querySelector(selector)
        }

        if (element) {
            const map = new jsVectorMap({
                selector: element,
                ...options,
            })

            window.addEventListener(
                "resize",
                debounce(() => {
                    map.updateSize()
                }, 200)
            )
        }
    }

    initWorldMapMarker() {
        this.initVectorMap("#world-map-markers", {
            map: "world",
            zoomOnScroll: false,
            zoomButtons: true,
            markersSelectable: true,
            markers: [
                { name: "Greenland", coords: [72, -42] },
                { name: "Canada", coords: [56.1304, -106.3468] },
                { name: "Brazil", coords: [-14.235, -51.9253] },
                { name: "Egypt", coords: [26.8206, 30.8025] },
                { name: "Russia", coords: [61, 105] },
                { name: "China", coords: [35.8617, 104.1954] },
                { name: "United States", coords: [37.0902, -95.7129] },
                { name: "Norway", coords: [60.472024, 8.468946] },
                { name: "Ukraine", coords: [48.379433, 31.16558] },
            ],
            markerStyle: {
                initial: { fill: theme("chart-primary") },
                selected: { fill: theme("chart-primary") },
            },
            regionStyle: {
                initial: {
                    stroke: "#aab9d14d",
                    strokeWidth: 0.25,
                    fill: "#aab9d14d",
                    fillOpacity: 1,
                },
            },
            labels: {
                markers: {
                    render: (marker) => marker.name,
                },
            },
        })
    }

    initWorldMarkerLine() {
        this.initVectorMap("#world-map-markers-line", {
            map: "world_merc",
            zoomOnScroll: false,
            zoomButtons: false,
            markers: [
                {
                    name: "Greenland",
                    coords: [72, -42],
                },
                {
                    name: "Canada",
                    coords: [56.1304, -106.3468],
                },
                {
                    name: "Brazil",
                    coords: [-14.235, -51.9253],
                },
                {
                    name: "Egypt",
                    coords: [26.8206, 30.8025],
                },
                {
                    name: "Russia",
                    coords: [61, 105],
                },
                {
                    name: "China",
                    coords: [35.8617, 104.1954],
                },
                {
                    name: "United States",
                    coords: [37.0902, -95.7129],
                },
                {
                    name: "Norway",
                    coords: [60.472024, 8.468946],
                },
                {
                    name: "Ukraine",
                    coords: [48.379433, 31.16558],
                },
            ],
            lines: [
                {
                    from: "Canada",
                    to: "Egypt",
                },
                {
                    from: "Russia",
                    to: "Egypt",
                },
                {
                    from: "Greenland",
                    to: "Egypt",
                },
                {
                    from: "Brazil",
                    to: "Egypt",
                },
                {
                    from: "United States",
                    to: "Egypt",
                },
                {
                    from: "China",
                    to: "Egypt",
                },
                {
                    from: "Norway",
                    to: "Egypt",
                },
                {
                    from: "Ukraine",
                    to: "Egypt",
                },
            ],
            regionStyle: {
                initial: {
                    stroke: "#aab9d14d",
                    strokeWidth: 0.25,
                    fill: "#aab9d14d",
                    fillOpacity: 1,
                },
            },
            markerStyle: {
                initial: { fill: theme("chart-secondary") },
                selected: { fill: theme("chart-secondary") },
            },
            lineStyle: {
                animation: true,
                strokeDasharray: "6 3 6",
            },
        })
    }

    initUsMap() {
        this.initVectorMap("#usa-vector-map-2", {
            map: "us_aea_en",                 // valid map id
            regionsSelectable: true,          // allow selection
            selectedRegions: ["US-CA", "US-NY", "US-TX", "US-FL"],

            regionStyle: {
                initial: { fill: theme("chart-primary") },
                selected: { fill: theme("chart-secondary") },
                selectedHover: { fill: theme("chart-beta") }
            }
        });
    }

    initIndiaMap() {
        this.initVectorMap("#india-vector-map", {
            map: "in_mill", // Make sure this is the India map with region codes
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: "#aab9d14d",
                },
                selected: {
                    fill: theme("chart-secondary"),
                },
            },
            selectedRegions: ["IN-GJ"],
        })
    }

    initCanadaMap() {
        this.initVectorMap("#canada-vector-map", {
            map: "canada",
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: theme("chart-primary"),
                },
            },
        })
    }

    initRussiaMap() {
        this.initVectorMap("#russia-vector-map", {
            map: "russia",
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: "#aab9d14d",
                },
            },
        })
    }

    initIraqMap() {
        this.initVectorMap("#iraq-vector-map", {
            map: "iraq",
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: theme("chart-primary"),
                },
            },
        })
    }

    initSpainMap() {
        this.initVectorMap("#spain-vector-map", {
            map: "spain",
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: "#aab9d14d",
                },
            },
        })
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    new VectorMap().init()
})
