export default {
  "*": [
    "bash -c \"yarn run tsc\""
  ],
  "*.{ts,tsx}": [
    "yarn run lint:files",
  ]
}
