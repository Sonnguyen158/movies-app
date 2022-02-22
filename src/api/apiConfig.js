const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'e6b5719fe037668d3d0cf8dc2bde44eb',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
