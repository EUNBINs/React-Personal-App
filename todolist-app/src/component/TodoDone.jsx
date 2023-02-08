const TodoDone = ( { lists, removeButtonHandler, editButtonHandler }) => {
  return <div className='list-wrapper'>
          {
            lists.map((item) => {
              if (item.isDone === true) {
                return <div key={item.id} className='todo-box'>
                  <h2>{item.title}</h2><br />
                  {item.content}
                  <div className='button-set'>
                    <button
                      onClick={() => removeButtonHandler(item.id)}
                      className='delete-button button'>삭제하기</button>
                    <button
                      onClick={() => editButtonHandler(item.id)}
                      className='edit-button button'>{item.isDone ? "취소" : "완료"}</button>
                  </div>
                </div>
              } else {
                return null
              }
            })
          }
        </div>
}

export default TodoDone;