import React, { useState } from 'react'
import './App.css'
import Form from "./component/Form"
import Todo from "./component/Todo"
import TodoDone from './component/TodoDone'

function App() {

  const [lists, setLists] = useState([
    { id: 0, title: '아침식사', content: '요거트먹기', isDone: true },
    { id: 1, title: '점심식사', content: '건강식먹기', isDone: true }
  ])
  console.log(lists)

  // title, content 객체
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }
  const contentChangeHandler = (event) => {
    setContent(event.target.value)
  }

  // 추가 버튼
  const addButtonHandler = () => {
    // 1. 새로 객체 만들어서, 변경을 알려주는 set에 넣어주자
    const newList = {
      id: lists.length + 1,
      title,
      content,
      isDone: false
    }
    setLists([...lists, newList]);
  }

  // 편집 버튼
  const editButtonHandler = (id) => {
    const newEdits = lists.map((item) => {
      console.log(...lists)
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      } else {
        return { ...item }
      }
    })
    setLists(newEdits)
  }

  // 삭제 버튼
  const removeButtonHandler = (id) => {
    const newRemoveList = lists.filter(item => item.id !== id)

    setLists(newRemoveList)
  }

  return (
    <div className='common-font'>
      <Form 
        titleChangeHandler={titleChangeHandler}
        contentChangeHandler={contentChangeHandler}
        addButtonHandler={addButtonHandler}
        title={title}
        content={content}/>
      <div className='list-container'>
        <div><h1>working..</h1></div>
        <Todo lists={lists}
              removeButtonHandler={removeButtonHandler}
              editButtonHandler={editButtonHandler}/>
      </div>
      <div className='list-container'>
        <div><h1>done..</h1></div>
        <TodoDone lists={lists}
                  removeButtonHandler={removeButtonHandler}
                  editButtonHandler={editButtonHandler}/>
      </div>
    </div>
  )
}


export default App