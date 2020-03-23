import React from 'react'
import styled from 'styled-components';
const Styles = styled.div`
.videoWrapper {

    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
}
.videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

}
`;
function Result({ result }) {
	return (
		<Styles>
    <div className="videoWrapper">
		<iframe src={result} width="560" height="315"  frameborder="0" allowfullscreen></iframe>
		</div>
		</Styles>

	)
}

export default Result
