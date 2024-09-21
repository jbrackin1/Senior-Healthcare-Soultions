/** @format */

import React, { useEffect } from "react";

const AdSense = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
		script.async = true;
		document.head.appendChild(script);

		script.onload = () => {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		};
	}, []);

	return (
		<div>
			<ins
				className="adsbygoogle"
				style={{ display: "block" }}
				data-ad-client='ca-pub-XXXXXXXXXXXXXX'
                // {/* Replace with your AdSense publisher ID */}
				data-ad-slot='XXXXXXXXXX'
                //  {/* Replace with your specific ad slot ID */}
				data-ad-format="auto"
				data-full-width-responsive="true"></ins>
		</div>
	);
};

export default AdSense;
