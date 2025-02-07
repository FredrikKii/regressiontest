<script lang="ts">
    // Inget extra script behövs för detta exempel
</script>

<section>
    <select name="profile">
        <option value="account">Pelles plåt AB</option>
        <option value="settings">Inställningar</option>
        <option value="fishing">Fredriks Fisketips</option>
        <option value="football">Man utd</option>
    </select>
    <img class="icon" src="/Profile-grey.svg" alt="profile icon" />
    <img class="icon" src="/Help-grey.svg" alt="help icon" />
    <img class="icon" src="/Settings-grey.svg" alt="settings icon" />
</section>

<style>
    select {
        /* Låt elementet anpassa sig efter innehållet */
        width: auto;
        /* Om du vill sätta en minsta bredd, exempelvis 10em: */
        /* min-width: 10em; */
        border: none;
        height: 2em;
        white-space: nowrap;
    }

    .icon {
        width: 18px;
        margin-left: 0.5em;
    }
</style>
