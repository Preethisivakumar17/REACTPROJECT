import { useState } from "react";

function Main() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderAccount: "",
    mpin: "",
    amount: "",
    receiverName: "",
    receiverAccount: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.senderName && formData.senderAccount && formData.mpin && formData.amount && formData.receiverName && formData.receiverAccount) {
      setSuccess(true);
    }
  };

  return (
    <div className="container">
      <h2>Money Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h3>From</h3>
          <label className='sn'>Sender Name:</label>
          <input type="text" name="senderName" onChange={handleChange} required />

          <label className='san'>Sender Account Name:</label>
          <input type="text" name="senderAccount" onChange={handleChange} required />

          <label className='mp'>MPIN:</label>
          <input type="password" name="mpin" onChange={handleChange} required />

          <label className='amt'>Amount:</label>
          <input type="number" name="amount" onChange={handleChange} required />
        </div>

        <div className="section">
          <h3>To</h3>
          <label className='rn'>Receiver Name:</label>
          <input type="text" name="receiverName" onChange={handleChange} required />

          <label className='ra'>Receiver Account Name:</label>
          <input type="text" name="receiverAccount" onChange={handleChange} required />
        </div>

        <button type="submit">SEND</button>
      </form>

      {success && <p className="success">Transaction Successful!</p>}
    </div>
  );
}

export default Main;
