const UsePost = async ( url, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": process.env.NEXT_PUBLIC_API_KEY,
          "Authorization": process.env.NEXT_PUBLIC_AUTHORIZATION,
          "Prefer": process.env.NEXT_PUBLIC_PREFAR
        },
        body: JSON.stringify(data)
      }).then(res => console.log(res))

      return response;
};

export default UsePost;