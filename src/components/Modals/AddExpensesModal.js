import React, { useContext, useState } from 'react';
import { ModalContext } from '../../App';
import { addExpense } from '../../data/expenses';

// export default function AddExpensesModal() {
//   const modalContext = useContext(ModalContext);
//   const isDisable =
//     modalContext.sum.trim() !== '' && modalContext.date !== '' ? false : true;
//   // let id = Date.now();

//   return (
//     <div>
//       <div onClick={(e) => e.stopPropagation()}>
//         <label>Сумма</label>
//         <input
//           type='text'
//           name='sum'
//           value={modalContext.sum}
//           onChange={modalContext.handleInputChange}
//         ></input>
//         <label>Дата</label>
//         <input
//           type='date'
//           name='date'
//           value={modalContext.date}
//           onChange={modalContext.handleInputChange}
//         ></input>
//         <label>Комментрий</label>
//         <input
//           type='text'
//           name='comment'
//           value={modalContext.comment}
//           onChange={modalContext.handleInputChange}
//         ></input>
//         <button
//           disabled={isDisable}
//           onClick={() => {
//             addExpense(
//               modalContext.sum,
//               // modalContext.categotyName,
//               modalContext.date,
//               modalContext.comment,
//               modalContext.selectedCategoryName,
//               // categoryName
//               // modalContext.setComment
//             );
//           }}
//         >
//           Добавить расход
//         </button>
//       </div>
//     </div>
//   );
// }

export default function AddExpensesModal({ selectedCategoryName }) {
  const [sum, setSum] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');

  const handleAddExpense = () => {
    addExpense(sum, date, comment, selectedCategoryName, setComment);
  };

  return (
    <div>
      <div onClick={(e) => e.stopPropagation()}>
        <label>Сумма</label>
        <input
          type='text'
          name='sum'
          value={sum}
          onChange={(e) => setSum(e.target.value)}
        ></input>
        <label>Дата</label>
        <input
          type='date'
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <label>Комментрий</label>
        <input
          type='text'
          name='comment'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button onClick={handleAddExpense}>Добавить расход</button>
      </div>
    </div>
  );
}
