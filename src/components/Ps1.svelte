<script>
  import {theme} from '../stores/theme';
  let hostname = window.location.hostname;
</script>

<h2 class="flex font-bold">
  <span style={`color: ${$theme.yellow};`}>guest</span>
  <span style={`color: ${$theme.white}`}>@</span>
  <span style={`color: ${$theme.green}`}>{hostname}</span>
  <span style={`color: ${$theme.white}`}>:~$</span>
</h2>
