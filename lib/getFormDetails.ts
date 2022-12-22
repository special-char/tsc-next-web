export const getFormDetails = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forms/${id}?populate=*`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        cache: 'no-cache',
        next: {
          revalidate: 0,
        },
      });
  
      return await res.json();
    } catch (error) {}
  };
  