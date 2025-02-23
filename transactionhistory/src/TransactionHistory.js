import React from "react";

const TransactionHistory = () => {
  const transactions = [
    { id: 1, receiver: "John Doe", account: "1234567890", amount: "$500", time: "2025-02-22 14:30" },
    { id: 2, receiver: "Alice Smith", account: "0987654321", amount: "$300", time: "2025-02-21 10:15" },
    { id: 3, receiver: "Bob Johnson", account: "1122334455", amount: "$700", time: "2025-02-20 18:45" },
  ];

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Receiver Name</th>
            <th className="border p-2">Account Number</th>
            <th className="border p-2">Amount Transferred</th>
            <th className="border p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="text-center border">
              <td className="border p-2">{transaction.receiver}</td>
              <td className="border p-2">{transaction.account}</td>
              <td className="border p-2">{transaction.amount}</td>
              <td className="border p-2">{transaction.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;