  import React, { useEffect, useState } from 'react';
import './App.css';
import Info from './components/Info';
import InfoLoadingComponent from './components/InfoLoading';

function App() {
	const InfoLoading = InfoLoadingComponent(Info);
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `http://127.0.0.1:8000/api/2`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((posts) => {
				setAppState({ loading: false, posts: posts });
			});
	}, [setAppState]);
	return (
		<div className="App">
			<InfoLoading isLoading={appState.loading} posts={appState.posts} />
		</div>
	);
}
export default App;
