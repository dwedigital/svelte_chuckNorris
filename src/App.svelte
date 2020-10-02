<script>
	import {onMount} from "svelte"
	import Button from "./components/button.svelte"

	const pageTitle="The 'ole Chuck Norris Joke Generator"
	let joke = ""
	
	async function getJoke() {
				await fetch("https://api.chucknorris.io/jokes/random")
		.then(res=>res.json())
		.then(data=>joke = data.value)
		.catch(err=>console.log(new Error(err.message)))
	}
	onMount(()=>{
		getJoke()
	})
</script>

<svelte:head>
<link rel="icon" 
      type="image/png" 
      href="images/dwe_icon.png">
  <title>{pageTitle}</title>
  <meta name="description" content="Another Chuck Norris Joke Generator Written in Svelte">
</svelte:head>


<main>
	<h1>Chuck Norris Joke Generator</h1>
	<hr/>

	<p>
		{joke}
	</p>


	<Button on:click={getJoke}/>
</main>

<style>


hr{
	width:20%;
	border:1px #ff3e00 solid;
	margin-bottom: 10px;
}
	
	main {
		
		display:flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 1em;
		width:80vw;
		margin: 0 auto;
		height:90vh;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size:calc(50px + 6 * ((100vw - 680px) / 680));
		font-weight: 100;
		text-align: center;
		margin-bottom: 10px;
	}

	p{
		font-size:calc(20px + 6 * ((100vw - 680px) / 680));
		font-weight: 100;
	}

	
</style>