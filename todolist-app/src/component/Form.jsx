const Form = function ({titleChangeHandler,contentChangeHandler,addButtonHandler,title,content}) {
  return <div className="Header-style">
    <div className="input-group">
      <label className="form-label">제목</label>
      <input
        type="text"
        value={title}
        onChange={titleChangeHandler}
        className="add-input" />
      <label className="form-label">내용</label>
      <input
        type="text"
        value={content}
        onChange={contentChangeHandler}
        className="add-input" />
      <button
        onClick={addButtonHandler}
        className="add-button">추가하기🧸</button>
    </div>
  </div>
}

export default Form;