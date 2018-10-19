<template>
    <div id="movie-list">
        <div v-for="movie in filteredMovies" class="movie">{{movie.title}}</div>
    </div>
</template>

<script>
import genres from "../util/genres";
export default {
  data() {
    return {
      movies: [
        { title: "Pulps fi", genre: genres.FANTASY },
        { title: "Home alone", genre: genres.COMEDY },
        { title: "how i met your mo", genre: genres.FANTASY }
      ]
    };
  },
  props: ["genre", "time"],
  methods: {
    moviePassesGenreFilter(movie) {
      if (!this.genre.length) {
        return true;
      } else {
        return this.genre.find(genre => movie.genre === genre);
      }
    }
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(this.moviePassesGenreFilter);
    }
  }
};
</script>
