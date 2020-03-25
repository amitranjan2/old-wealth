
import React from 'react'

function Search ({ handleInput, search }) {
	return (
        <div className="bo">
		<section className="searchbox-wrap">
			<input
				type="text"
				placeholder="Search for your favorite  youtube channel and Add ..."
				className="searchbox"
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
        </div>
	)
}

export default Search
