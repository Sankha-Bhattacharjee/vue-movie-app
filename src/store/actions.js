export default{
    async fetchTrendingMoviesAndShows(context){

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGU2OGJjYWE1MjVhYWVjYmVkMjcwM2E3ZDJlZjFiNyIsInN1YiI6IjY0OGVjMmVjNDJiZjAxMDBhZTMxYzQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E8EZmbpCoqqrZFHfBNpQVzyIR16kh7pTheWVYUpKOJc'
            }
          };
          
         const response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);
        //console.log("Response",response);
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error("Failed to fetch movie and shows list!")
            throw error;
        }
        console.log("ResponseData",responseData.results);
       // console.log(context);

        context.commit("setTrendingMovieandShowsList", responseData.results);
    },
    async fetchTrendingMovies(context){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGU2OGJjYWE1MjVhYWVjYmVkMjcwM2E3ZDJlZjFiNyIsInN1YiI6IjY0OGVjMmVjNDJiZjAxMDBhZTMxYzQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E8EZmbpCoqqrZFHfBNpQVzyIR16kh7pTheWVYUpKOJc'
            }
          };
          
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options);
          
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error("Failed to fetch top rated movies list!")
            throw error;
        }
        console.log("ResponseDataTopRated",responseData.results);
       // console.log(context);

        context.commit("setTrendingMoviesList", responseData.results.slice(0,9));
    },
    async fetchUpcomingMovies(context){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGU2OGJjYWE1MjVhYWVjYmVkMjcwM2E3ZDJlZjFiNyIsInN1YiI6IjY0OGVjMmVjNDJiZjAxMDBhZTMxYzQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E8EZmbpCoqqrZFHfBNpQVzyIR16kh7pTheWVYUpKOJc'
            }
          };
          
        const response = await fetch('https://api.themoviedb.org/3/trending/tv/week?language=en-US', options);
          
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error("Failed to fetch top rated movies list!")
            throw error;
        }
        console.log("ResponseDataupcoming",responseData.results);
       // console.log(context);

        context.commit("setTrendingShowsList", responseData.results.slice(0,9));
    }


}