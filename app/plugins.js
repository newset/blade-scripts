/*
* @Author: insane.luojie
* @Date:   2017-09-22 16:26:53
* @Last Modified by:   insane.luojie
* @Last Modified time: 2017-09-28 15:34:08
*/
<%
	plugins.forEach((item) => {
%>
const <%= item.name %> = import('<%= relativeToBuild(item.path) %>');
export <%= item.name %>;

<%
	});
%>

export {
	<%= 
		plugins.map((item) => {
				return item.name
			})
			.join(",");
	%>
}
