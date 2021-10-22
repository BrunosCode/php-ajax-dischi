const app = new Vue(
    {
        el: "#app",
        data: {
            selectedGenre: "",
            selectedAuthor: "",
            selectedYear: "",
            collection: [],
            filteredCollection: []
        },
        methods: {
            getCollection() {
                console.log("getCollection")
                // Get collection from an API
                axios
                .get("http://localhost:8888/boolean/php-ajax-dischi/api/", {
                    params: {
                        genre: this.selectedGenre, 
                        author: this.selectedAuthor, 
                        year: this.selectedYear, 
                    }
                })
                .then((response) => {
                    this.filteredCollection = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        computed: {
            // Generate an array with no duplicate items, to use as filter
            collectionGenres() {
                let genres = this.collection.map(album => album.genre);
                let genresSet = new Set(genres);
                return genresSet;
            },
            // Generate an array with no duplicate items, to use as filter
            collectionAuthors() {
                let authors = this.collection.map(album => album.author);
                let authorsSet = new Set(authors);
                return authorsSet;
            },
            // Generate an array with no duplicate items, to use as filter
            collectionYears() {
                let years = this.collection.map(album => album.year);
                let yearsSet = new Set(years);
                return yearsSet;
            },
        },
        created() {
            // Get collection from an API
            axios
            .get("http://localhost:8888/boolean/php-ajax-dischi/api/", {
                params: {
                    genre: this.selectedGenre, 
                    author: this.selectedAuthor, 
                    year: this.selectedYear, 
                }
            })
            .then((response) => {
                // used to get stable filters
                this.collection.push(...response.data);
                // show on page
                this.filteredCollection.push(...response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
)



