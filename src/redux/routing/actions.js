export const GO_NEXT = "[routing] go next";
export const GO_PREV = "[routing] go prev";
export const GO_TO = "[routing] go to";
export const GO_HISTORY_PREV = "[routing] go history prev";
export const POP_HISTORY = "[routing] pop history";
export const PUSH_HISTORY = "[routing] push history";
export const SET_CURRENT = "[routing] set Current";

export const goNext = () => {
	return {
		type: GO_NEXT,
	};
};
export const goPrev = () => {
	return {
		type: GO_PREV,
	};
};

export const goTo = (name) => {
	if (name != "splash" && name != "onBoarding" && name != "main") {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event: "virtualPageview",
			pageUrl: "https://app.uocra.org/?page#" + name,
			pageTitle: name,
		});

		//window.dataLayer = window.dataLayer || [];
		//window.dataLayer.push({ event: "cliqueo" });
		//dataLayer.push({
		//	event: "pageview",
		//	page: {
		//		path: "/" + name,
		//	},
		//});
	}
	return {
		type: GO_TO,
		name: name,
	};
};

export const goHistoryPrev = (name) => {
	return {
		type: GO_HISTORY_PREV,
	};
};

export const popHistory = () => {
	return {
		type: POP_HISTORY,
	};
};

export const pushHistory = (name) => {
	return {
		type: PUSH_HISTORY,
		name: name,
	};
};

export const setCurrent = (node) => {
	return {
		type: SET_CURRENT,
		node: node,
	};
};
