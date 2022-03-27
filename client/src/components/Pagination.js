import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <ul className='pagination align-content-center justify-content-center'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a
              href='!#'
              onClick={(e) => {
                e.preventDefault()
                paginate(number)
              }}
              className='page-link'
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Pagination
