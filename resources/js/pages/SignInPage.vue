<template>
    <form>
        <div>
            <label for="">E-mail: </label>
            <input type="email" name="email">            
        </div>
        <div>
            <label for="password">Wachtwoord: </label>
            <input type="password" name="password">          
        </div>
        <div>
            <button type="submit">
                Log in
            </button>            
        </div>
    </form>
</template>

<script>
    export default {
        name: 'sign-in',
        components: {
            
        }
    }
</script>