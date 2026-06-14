const getVideos = (req, res) => {
    const videos = [
        {
            id: 1,
            title: "Short Film 1",
            thumbnail: "https://picsum.photos/300/200"
        },
        {
            id: 2,
            title: "Short Film 2",
            thumbnail: "https://picsum.photos/300/200"
        },
        {
            id: 3,
            title: "Short Film 3",
            thumbnail: "https://picsum.photos/300/200"
        }
    ];

    res.json(videos);
};

module.exports = { getVideos };