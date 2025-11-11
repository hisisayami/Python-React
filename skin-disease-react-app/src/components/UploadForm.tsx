import React, { useState } from 'react';
import axios from 'axios';

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    setLoading(true);
    setPrediction('');

    try {
      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Upload failed', error);
      setPrediction('Prediction failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-200 space-y-6">
  <h2 className="text-3xl font-bold text-center text-gray-800">
    Skin Disease Classifier
  </h2>

  <div className="flex flex-col items-center gap-2">
    <label
      htmlFor="file-upload"
      className="w-full cursor-pointer border border-dashed border-gray-400 rounded-lg px-4 py-6 text-center text-gray-500 hover:border-blue-500 hover:text-blue-600 transition"
    >
      <span className="block mb-1 font-medium">Click to upload an image</span>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </label>
  </div>

  <button
    onClick={handleUpload}
    disabled={loading}
    className={`w-full py-3 rounded-lg text-white font-semibold transition ${
      loading
        ? "bg-blue-400 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700"
    }`}
  >
    {loading ? "Predicting..." : "Predict"}
  </button>

  {prediction && (
    <div className="text-center mt-4">
      <p className="text-gray-700 text-lg">
        <span className="font-semibold text-green-600">Predicted Disease:</span>{" "}
        {prediction}
      </p>
    </div>
  )}
</div>

  );
};

export default UploadForm;
