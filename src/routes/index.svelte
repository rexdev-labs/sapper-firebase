<script>
	import firebase from 'firebase/app';
	import 'firebase/database';
	import {onMount} from 'svelte';

	let dotas2 = {};
	let coba1 = 'qwdq';

	const db = firebase.database().ref('/dota2/');

	onMount (() =>{
		firebase.database().ref('/dota2/')
		.once('value').then(function(snapshot){
			dotas2 = snapshot.val();
			console.log(dotas2)
		});
	});

	function inputData(){
		db.push({
		author: "gracehop",
		title: "Announcing COBOL, a New Programming Language"
		}).then(res => alert(res));
	}

	function updateData(){
		db.update({
			"-M53KVQ0nxf3Dx1XEldf/author" : "duar"
		}).then(res => alert(res));
	}


</script>
<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<img alt='Borat' src='great-success.png'>
	<br>
	
</figure>
{#each Object.keys(dotas2) as dota2}
	 {dota2} is {dotas2[dota2]}<br>
{/each}
<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.{coba1}</strong></p>
<input bind:value={coba1}>
<button on:click={inputData}>qwdqwd</button>
<button on:click={updateData}>update</button>

<h1>Hello {coba1}!</h1>
