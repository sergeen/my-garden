function StaWatcher(state) {
  let previousState = state;
  setInterval(() => {
    if (state !== previousState) {
      previousState = state;
    }
    myDiv.update(state.identity);
  }, 2000);
}

export default StaWatcher;
