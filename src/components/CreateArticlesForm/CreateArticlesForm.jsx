// import React, { useState } from 'react';
import { useState } from 'react';
import css from './CreateArticlesForm.module.css';

const CreateArticlesForm = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Dispatch action to add article
    // dispatch(addArticle({ image, author, text }));
    // Reset form fields after submission
    setTitle('');
    setAuthor('');
    setText('');
  };

  return (
    <form className={css.userFormWrapper} onSubmit={handleSubmit}>
      {/* <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={e => setImage(e.target.value)}
          value={image}
          required
        />
      </div> */}
      <div className={css.userFormLabelWrapper}>
        {' '}
        <label className={css.userFormLabel} htmlFor="author">
          Author
        </label>
        <input
          className={css.userFormText}
          type="text"
          id="author"
          onChange={e => setAuthor(e.target.value)}
          value={author}
          required
        />
      </div>
      <div className={css.userFormLabelWrapper}>
        <label className={css.userFormLabel} htmlFor="title">
          title
        </label>
        <input
          className={css.userFormText}
          type="text"
          id="title"
          onChange={e => setTitle(e.target.value)}
          value={title}
          required
        />
      </div>
      <div className={css.userFormLabelWrapper}>
        {' '}
        <label className={css.userFormLabel} htmlFor="text">
          Text
        </label>
        <textarea
          className={css.userFormTextarea}
          id="text"
          onChange={e => setText(e.target.value)}
          value={text}
          required
        />
      </div>
      <button className={css.userFormButton} type="submit">
        Add Article
      </button>
    </form>
  );
};

export default CreateArticlesForm;