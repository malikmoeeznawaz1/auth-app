const API_URL = "http://localhost:5000/api/auth";

export const signup = async (email, password, confirmPassword) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, confirmPassword }),
    });

    return await response.json();
  } catch (error) {
    console.error("Signup Error:", error);
    return { error: "Something went wrong" };
  }
};

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    return await response.json();
  } catch (error) {
    console.error("Login Error:", error);
    return { error: "Something went wrong" };
  }
};
