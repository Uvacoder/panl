import mitt from "mitt";
const emitter = new mitt();
const eventBus = () => {
	return { emitter };
};
export default eventBus;
