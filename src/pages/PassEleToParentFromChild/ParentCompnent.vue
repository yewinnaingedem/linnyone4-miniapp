<template>
    <div class="bg-primary">
        <div class="card">
            <div class="card-header">
                <h1>Components</h1>
            </div>
            <div class="card-body">
                <slot></slot>
            </div>
            <div class="card-footer">
                <button class="btn btn-danger testing-btn">Delete</button>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name : "ParentComponent" ,
    }


</script>