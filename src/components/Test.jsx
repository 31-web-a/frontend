import { useState } from "react";
1;
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";

const Test = () => {
  const { token } = useAuth();

  const initialForm = {
    startDate: "",
    endDate: "",
    name: "",
    objetiveType: "",
    desiredValue: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/goals",
        {
          startDate: formData.startDate,
          endDate: formData.endDate,
          name: formData.name,
          objetive: {
            objetiveType: formData.objetiveType,
            desiredValue: formData.desiredValue,
          },
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setFormData(initialForm);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Crear meta</h2>
      <form>
        <label>Start date</label>
        <br />
        <input
          name="startDate"
          onChange={handleChange}
          type="date"
          value={formData.startDate}
        />
        <br />
        <label>End date</label>
        <br />
        <input
          name="endDate"
          onChange={handleChange}
          type="date"
          value={formData.endDate}
        />
        <br />
        <label>Nombre meta</label>
        <br />
        <input
          name="name"
          onChange={handleChange}
          type="text"
          value={formData.name}
        />
        <br />
        <label>Tipo objetivo</label>
        <br />
        <input
          name="objetiveType"
          onChange={handleChange}
          type="text"
          value={formData.objetiveType}
        />
        <br />
        <label>Valor deseado</label>
        <br />
        <input
          name="desiredValue"
          onChange={handleChange}
          type="text"
          value={formData.desiredValue}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Crear meta
        </button>
      </form>
    </div>
  );
};

export default Test;
