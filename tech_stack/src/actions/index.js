export const selectLibrary = (librayId) => {
  return {
    type: 'select_Library',
    payload: librayId,
  };
};
