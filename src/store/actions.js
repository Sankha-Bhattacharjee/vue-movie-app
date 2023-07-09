export default{
    async fetchBothTrendingMoviesAndShows(context, payload){
        //console.log("payload",payload)
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGU2OGJjYWE1MjVhYWVjYmVkMjcwM2E3ZDJlZjFiNyIsInN1YiI6IjY0OGVjMmVjNDJiZjAxMDBhZTMxYzQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E8EZmbpCoqqrZFHfBNpQVzyIR16kh7pTheWVYUpKOJc'
            }
          };
          
         const response = await fetch(`https://api.themoviedb.org/3/trending/${payload}/day?language=en-US`, options);
        //console.log("Response",response);
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error("Failed to fetch movie and shows list!")
            throw error;
        }
        console.log("ResponseData",responseData.results);
       // console.log(context);

        context.commit("setTrendingMovieAndShowsList", responseData.results);
    },
    async fetchTrendingMoviesOrShows(context, payload){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGU2OGJjYWE1MjVhYWVjYmVkMjcwM2E3ZDJlZjFiNyIsInN1YiI6IjY0OGVjMmVjNDJiZjAxMDBhZTMxYzQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E8EZmbpCoqqrZFHfBNpQVzyIR16kh7pTheWVYUpKOJc'
            }
          };
          
        const response = await fetch(`https://api.themoviedb.org/3/trending/${payload}/week?language=en-US`, options);
          
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error("Failed to fetch trending movie or shows list!")
            throw error;
        }
        console.log("ResponseDataTrending",responseData.results);
       // console.log(context);
        if(payload === "movie"){
          context.commit("setTrendingMoviesList", responseData.results.slice(0,9));
        }else if(payload === "tv"){
          context.commit("setTrendingShowsList", responseData.results.slice(0,9));
        }
    },
    async fetchTopRatedMoviesOrShows(context, payload){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGU2OGJjYWE1MjVhYWVjYmVkMjcwM2E3ZDJlZjFiNyIsInN1YiI6IjY0OGVjMmVjNDJiZjAxMDBhZTMxYzQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E8EZmbpCoqqrZFHfBNpQVzyIR16kh7pTheWVYUpKOJc'
            }
          };
          
        const response = await fetch(`https://api.themoviedb.org/3/${payload}/top_rated?language=en-US&page=1`, options);
         
        const responseData = await response.json();
        if (!response.ok) {
            const error = new Error("Failed to fetch top rated movie and shows list!")
            throw error;
        }
        console.log("ResponseDataTopRated"+payload,responseData.results);
       // console.log(context);

        context.commit("setTopratedList", responseData.results);
    },
    async fetchUpcomingMoviesOrShows(context, payload){
      const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGU2OGJjYWE1MjVhYWVjYmVkMjcwM2E3ZDJlZjFiNyIsInN1YiI6IjY0OGVjMmVjNDJiZjAxMDBhZTMxYzQ1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E8EZmbpCoqqrZFHfBNpQVzyIR16kh7pTheWVYUpKOJc'
          }
        };
        
      const response = await fetch(`https://api.themoviedb.org/3/${payload.type}/${payload.upcoming}?language=en-US&page=1`, options);
      
      const responseData = await response.json();
      if (!response.ok) {
          const error = new Error("Failed to fetch top rated movie and shows list!")
          throw error;
      }
      console.log("ResponseDataUpcoming",responseData.results);
     // console.log(context);

      context.commit("setUpcomingMovieList", responseData.results.slice(0,9));
  }


}