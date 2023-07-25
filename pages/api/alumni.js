// api/alumni.js

const API_BASE_URL = 'http://localhost:3030/alumnis'; // Replace with your actual API base URL

export const getAllAlumni = async () => {
  const response = await fetch(`${API_BASE_URL}`);
  const data = await response.json();
  return data;
};

export const getAlumniById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/id/${id}`);
  const data = await response.json();
  return data;
};

export const getAlumniByEmail = async (email) => {
  const response = await fetch(`${API_BASE_URL}/email/${email}`);
  const data = await response.json();
  return data;
};

export const getAlumniByDegree = async (degree) => {
  const response = await fetch(`${API_BASE_URL}/degree/${degree}`);
  const data = await response.json();
  return data;
};

export const getAlumniByBranch = async (branch) => {
  const response = await fetch(`${API_BASE_URL}/branch/${branch}`);
  const data = await response.json();
  return data;
};

export const getAlumniByYOP = async (yop) => {
  const response = await fetch(`${API_BASE_URL}/yop/${yop}`);
  const data = await response.json();
  return data;
};
