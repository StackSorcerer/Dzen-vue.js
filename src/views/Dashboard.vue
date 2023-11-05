<template>
    <div class="d-flex">
        <div class="gallery">
            <img
                src="https://picsum.photos/id/815/400/400"
                alt="Two hands creating a heart and showing the sun"
            />
            <img
                src="https://picsum.photos/id/872/400/400"
                alt="The mountain"
            />
            <img src="https://picsum.photos/id/603/400/400" alt="a river" />
            <img
                src="https://picsum.photos/id/823/400/400"
                alt="a women with a camera"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
};
</script>

<style>
.d-flex {
    margin-top: 10%;
    display: flex;
    justify-content: center;
}
.gallery {
    --g: 6px;

    display: grid;
    width: 750px;
    aspect-ratio: 1;
    grid: auto-flow 1fr / repeat(3, 1fr);
    gap: var(--g);
}
.gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale();
    cursor: pointer;
    transition: 0.5s;
}
.gallery img:hover {
    filter: grayscale(0);
}
.gallery img:nth-child(2) {
    grid-area: 1/2 / span 2 / span 2;
    clip-path: polygon(
        0 0,
        100% 0,
        100% 100%,
        calc(50% + var(--g) / 4) 100%,
        0 calc(50% - var(--g) / 4)
    );
}
.gallery img:nth-child(3) {
    grid-area: 2/1 / span 2 / span 2;
    clip-path: polygon(
        0 0,
        calc(50% - var(--g) / 4) 0,
        100% calc(50% + var(--g) / 4),
        100% 100%,
        0 100%
    );
}
</style>
