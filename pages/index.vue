<template>
	<div>
		<section
			class="hero is-link is-fullheight"
			style="background-color: #00cec9"
		>
			<div class="hero-body">
				<div class="container columns">
					<section class="ml-6 column">
						<h1
							class="title text-pop-up-top"
							style="font-size: 8rem"
						>
							WriteKit
							
						</h1>
						<h class="title first-subtitle">Rewriting the writing process</h>
						<h2 class="subtitle">
							A powerful, flexible, and simple block based
							document editor.
						</h2>
						<br />
						<nuxt-link to="/dashboard">
							<b-button type="is-primary">Get started!</b-button>
						</nuxt-link>
					</section>
					<section class="column">
						<img class="tilt-in-right-2" src="@/assets/home.svg" />
					</section>
				</div>
			</div>
		</section>
		<div class="my-6 container has-text-centered">
			<h2 class="title bottom-header">What is WriteKit?</h2>
			<p class="subtitle" style="margin-left: 20%; margin-right: 20%">
				Writekit is a document editor that makes the process of writing
				more approachable and enjoyable. <br /><br />
				With WriteKit, you can create an outline in seconds. WriteKit
				will recognize your structure and will provide helpful insights
				as you write. <br /><br />
				Create a new document and bring your ideas to life in a more
				intuitive and natural way.
			</p>
			<br /><br />
			<div class="columns">
				<section class="column">
					Make writing more approachable with WriteKit's block system.
					<strong>Define</strong> what you want to write then get
					powerful <strong>tooling</strong> as you write!
				</section>
				<section class="column">
					Make writing more approachable with WriteKit's block system.
					<strong>Define</strong> what you want to write then get
					powerful <strong>tooling</strong> as you write!
				</section>
			</div>
		</div>
	</div>
</template>
<script>
import state from "../state"
export default {

}
</script>

<style>
.text-pop-up-top {
	-webkit-animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
		both;
	animation: text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.tilt-in-right-2 {
	-webkit-animation: tilt-in-right-2 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
		1s both;
	animation: tilt-in-right-2 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
}

.first-subtitle {
	position: relative;
	bottom: 2.5rem;
}

.bottom-header {
	position: relative;
	bottom: 2rem;
}


@-webkit-keyframes tilt-in-right-2 {
	0% {
		-webkit-transform: rotateX(30deg) translateX(300px) skewX(-30deg);
		transform: rotateX(30deg) translateX(300px) skewX(-30deg);
		opacity: 0;
	}
	100% {
		-webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
		transform: rotateX(0deg) translateX(0) skewX(0deg);
		opacity: 1;
	}
}
@keyframes tilt-in-right-2 {
	0% {
		-webkit-transform: rotateX(30deg) translateX(300px) skewX(-30deg);
		transform: rotateX(30deg) translateX(300px) skewX(-30deg);
		opacity: 0;
	}
	100% {
		-webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
		transform: rotateX(0deg) translateX(0) skewX(0deg);
		opacity: 1;
	}
}

@keyframes text-pop-up-top {
	0% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
		-webkit-transform-origin: 50% 50%;
		transform-origin: 50% 50%;
		text-shadow: none;
	}
	100% {
		-webkit-transform: translateY(-50px);
		transform: translateY(-50px);
		-webkit-transform-origin: 50% 50%;
		transform-origin: 50% 50%;
		text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
			0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
			0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
	}
}
</style>