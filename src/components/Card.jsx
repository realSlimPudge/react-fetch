import React from 'react'

export default function Card({ data }) {
	return (
		<div className='card'>
			<h1>{data.name}</h1>
			<p>Email: {data.email}</p>
			<p>Phone: {data.phone}</p>
			<p>Address: {data.address.street}</p>
		</div>
	)
}
