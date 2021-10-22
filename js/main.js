const app = new Vue(
    {
        el: "#app",
        data: {
            selectedGenre: "",
            selectedAuthor: "",
            selectedYear: "",
            collection: []
        },
        // methods: {
        //     // Storing the filters
        //     storeSelectedGenre: function (string) {
        //         this.selectedGenre = string;
        //     },
        //     storeSelectedAuthor: function (string) {
        //         this.selectedAuthor = string;
        //     },
        //     storeSelectedYear: function (string) {
        //         this.selectedYear = string;
        //     },
        // },
        // computed: {
        //     // Generate an array with no duplicate items, to use as filter
        //     collectionGenres: function () {
        //         let genres = this.collection.map(album => album.genre);
        //         let genresSet = new Set(genres);
        //         return genresSet;
        //     },
        //     // Generate an array with no duplicate items, to use as filter
        //     collectionAuthors: function () {
        //         let authors = this.collection.map(album => album.author);
        //         let authorsSet = new Set(authors);
        //         return authorsSet;
        //     },
        //     // Generate an array with no duplicate items, to use as filter
        //     collectionYears: function () {
        //         let years = this.collection.map(album => album.year);
        //         let yearsSet = new Set(years);
        //         return yearsSet;
        //     },
        // },
        created: function () {
            // Get collection from an API
            axios
                .get("http://localhost:8888/boolean/php-ajax-dischi/api/")
                .then((response) => {
                    this.collection.push(...response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
)



