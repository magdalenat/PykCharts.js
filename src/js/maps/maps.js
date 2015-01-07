PykCharts.maps = {};

PykCharts.maps.mouseEvent = function (options) {
    var highlight_selected = {
        highlight: function (selectedclass, that) {
            var t = d3.select(that);
            d3.selectAll(selectedclass)
                .attr("opacity",.5)
            t.attr("opacity",1);
            return this;
        },
        highlightHide : function (selectedclass) {
            d3.selectAll(selectedclass)
                .attr("opacity",1);
            return this;
        }
    }
    return highlight_selected;
}

PykCharts.maps.processInputs = function (chartObject, options) {

    var theme = new PykCharts.Configuration.Theme({})
        , stylesheet = theme.stylesheet
        , functionality = theme.functionality
        , mapsTheme = theme.mapsTheme
        , optional = options.optional;

    chartObject.selector = options.selector ? options.selector : stylesheet.selector;

    chartObject.width = options.chart_width ? options.chart_width : stylesheet.chart_width;
    chartObject.height = options.chart_height ? options.chart_height : stylesheet.chart_height;
    chartObject.map_code = options.map_code ? options.map_code : mapsTheme.map_code;
    chartObject.click_enable = options.click_enable ? options.click_enable.toLowerCase() : mapsTheme.click_enable;
    chartObject.background_color = options.background_color ? options.background_color : stylesheet.background_color;

    chartObject.timeline_duration = "timeline_duration" in options ? options.timeline_duration :mapsTheme.timeline_duration;

    chartObject.margin_left = options.timeline_margin_left ? options.timeline_margin_left : mapsTheme.timeline_margin_left;
    chartObject.margin_right = options.timeline_margin_right ? options.timeline_margin_right : mapsTheme.timeline_margin_right;
    chartObject.margin_top = options.timeline_margin_top ? options.timeline_margin_top : mapsTheme.timeline_margin_top;
    chartObject.margin_bottom = options.timeline_margin_bottom ? options.timeline_margin_bottom : mapsTheme.timeline_margin_bottom;

    chartObject.tooltip_enable = options.tooltip_enable ? options.tooltip_enable.toLowerCase() : stylesheet.tooltip_enable;
    chartObject.tooltip_mode = options.tooltip_mode ? options.tooltip_mode.toLowerCase() : stylesheet.tooltip_mode;
    chartObject.tooltip_position_top = options.tooltip_position_top ? options.tooltip_position_top : mapsTheme.tooltip_position_top;
    chartObject.tooltip_position_left = options.tooltip_position_left ? options.tooltip_position_left : mapsTheme.tooltip_position_left;
    chartObject.tooltipTopCorrection = d3.select(chartObject.selector).style("top");
    chartObject.tooltipLeftCorrection = d3.select(chartObject.selector).style("left");
    chartObject.chart_color = options.chart_color ? options.chart_color : [];
    chartObject.default_color = stylesheet.chart_color;
    chartObject.total_no_of_colors = options.total_no_of_colors && _.isNumber(parseInt(options.total_no_of_colors,10))? parseInt(options.total_no_of_colors,10) : mapsTheme.total_no_of_colors;
    chartObject.color_mode = options.color_mode ? options.color_mode.toLowerCase() : stylesheet.color_mode;
    chartObject.saturation_color = options.saturation_color ? options.saturation_color : "";
    chartObject.palette_color = options.palette_color ? options.palette_color : mapsTheme.palette_color;

    chartObject.legends_enable =  options.legends_enable ? options.legends_enable.toLowerCase() : stylesheet.legends_enable;
    chartObject.legends_display = options.legends_display ? options.legends_display.toLowerCase() : stylesheet.legends_display;
    chartObject.legends_text_size = options.legends_text_size ? options.legends_text_size : stylesheet.legends_text_size;
    chartObject.legends_text_color = options.legends_text_color ? options.legends_text_color : stylesheet.legends_text_color;
    chartObject.legends_text_weight = options.legends_text_weight ? options.legends_text_weight.toLowerCase() : stylesheet.legends_text_weight;
    chartObject.legends_text_family = options.legends_text_family ? options.legends_text_family.toLowerCase() : stylesheet.legends_text_family;

    chartObject.axis_x_enable = options.axis_x_enable ? options.axis_x_enable.toLowerCase() : stylesheet.axis_x_enable;
    chartObject.axis_x_pointer_position = PykCharts['boolean'](chartObject.axis_x_enable) && options.axis_x_pointer_position ? options.axis_x_pointer_position.toLowerCase() : stylesheet.axis_x_pointer_position;
    chartObject.axis_x_line_color = PykCharts['boolean'](chartObject.axis_x_enable) && options.axis_x_line_color ? options.axis_x_line_color : stylesheet.axis_x_line_color;
    chartObject.axis_x_no_of_axis_value = PykCharts['boolean'](chartObject.axis_x_enable) && options.axis_x_no_of_axis_value ? options.axis_x_no_of_axis_value : stylesheet.axis_x_no_of_axis_value;
    chartObject.axis_x_pointer_padding = PykCharts['boolean'](chartObject.axis_x_enable) && options.axis_x_pointer_padding ? options.axis_x_pointer_padding : stylesheet.axis_x_pointer_padding;
    chartObject.axis_x_pointer_length = "axis_x_pointer_length" in options && PykCharts['boolean'](chartObject.axis_x_enable) ? options.axis_x_pointer_length : stylesheet.axis_x_pointer_length;
    chartObject.axis_x_pointer_values = PykCharts['boolean'](chartObject.axis_x_enable) && options.axis_x_pointer_values ? options.axis_x_pointer_values : stylesheet.axis_x_pointer_values;
    chartObject.axis_x_outer_pointer_length = "axis_x_outer_pointer_length" in options && PykCharts['boolean'](chartObject.axis_x_enable) ? options.axis_x_outer_pointer_length : stylesheet.axis_x_outer_pointer_length;

    chartObject.axis_x_pointer_size = "axis_x_pointer_size" in options ? options.axis_x_pointer_size : stylesheet.axis_x_pointer_size;
    chartObject.axis_x_pointer_weight = options.axis_x_pointer_weight ? options.axis_x_pointer_weight.toLowerCase() : stylesheet.axis_x_pointer_weight;
    chartObject.axis_x_pointer_family = options.axis_x_pointer_family ? options.axis_x_pointer_family.toLowerCase() : stylesheet.axis_x_pointer_family;
    chartObject.axis_x_pointer_color = options.axis_x_pointer_color ? options.axis_x_pointer_color : stylesheet.axis_x_pointer_color;

    chartObject.label_enable = options.label_enable ? options.label_enable.toLowerCase() : mapsTheme.label_enable;
    chartObject.label_color = options.label_color ? options.label_color : stylesheet.label_color;

    chartObject.border_between_chart_elements_thickness = "border_between_chart_elements_thickness" in options ? options.border_between_chart_elements_thickness : stylesheet.border_between_chart_elements_thickness;
    chartObject.border_between_chart_elements_color = options.border_between_chart_elements_color ? options.border_between_chart_elements_color : stylesheet.border_between_chart_elements_color;
    chartObject.border_between_chart_elements_style = options.border_between_chart_elements_style ? options.border_between_chart_elements_style.toLowerCase() : stylesheet.border_between_chart_elements_style;
    switch(chartObject.border_between_chart_elements_style) {
        case "dotted" : chartObject.border_between_chart_elements_style = "1,3";
                        break;
        case "dashed" : chartObject.border_between_chart_elements_style = "5,5";
                       break;
        default : chartObject.border_between_chart_elements_style = "0";
                  break;
    }
    
    chartObject.onhover_enable = options.chart_onhover_highlight_enable ? options.chart_onhover_highlight_enable : stylesheet.chart_onhover_highlight_enable;
    chartObject.onhover = options.chart_onhover_effect ? options.chart_onhover_effect : mapsTheme.chart_onhover_effect;
    chartObject.default_zoom_level = options.default_zoom_level ? options.default_zoom_level : 80;

    chartObject.loading_type = options.loading_type ? options.loading_type : stylesheet.loading_type;
    chartObject.loading_source = options.loading_source ? options.loading_source : stylesheet.loading_source;
    chartObject.highlight = options.highlight ? options.highlight : stylesheet.highlight;
    chartObject.highlight_color = options.highlight_color ? options.highlight_color: stylesheet.highlight_color;
    if (options &&  PykCharts['boolean'] (options.title_text)) {
        chartObject.title_text = options.title_text;
        chartObject.title_size = "title_size" in options ? options.title_size : stylesheet.title_size;
        chartObject.title_color = options.title_color ? options.title_color : stylesheet.title_color;
        chartObject.title_weight = options.title_weight ? options.title_weight.toLowerCase() : stylesheet.title_weight;
        chartObject.title_family = options.title_family ? options.title_family.toLowerCase() : stylesheet.title_family;
    } else {
        chartObject.title_size = stylesheet.title_size;
        chartObject.title_color = stylesheet.title_color;
        chartObject.title_weight = stylesheet.title_weight;
        chartObject.title_family = stylesheet.title_family;
    }

    if (options && PykCharts['boolean'](options.subtitle_text)) {
        chartObject.subtitle_text = options.subtitle_text;
        chartObject.subtitle_size = "subtitle_size" in options ? options.subtitle_size : stylesheet.subtitle_size;
        chartObject.subtitle_color = options.subtitle_color ? options.subtitle_color : stylesheet.subtitle_color;
        chartObject.subtitle_weight = options.subtitle_weight ? options.subtitle_weight.toLowerCase() : stylesheet.subtitle_weight;
        chartObject.subtitle_family = options.subtitle_family ? options.subtitle_family.toLowerCase() : stylesheet.subtitle_family;
    } else {
        chartObject.subtitle_size = stylesheet.subtitle_size;
        chartObject.subtitle_color = stylesheet.subtitle_color;
        chartObject.subtitle_weight = stylesheet.subtitle_weight;
        chartObject.subtitle_family = stylesheet.subtitle_family;
    }

    chartObject.real_time_charts_refresh_frequency = options.real_time_charts_refresh_frequency ? options.real_time_charts_refresh_frequency : functionality.real_time_charts_refresh_frequency;
    chartObject.real_time_charts_last_updated_at_enable = options.real_time_charts_last_updated_at_enable ? options.real_time_charts_last_updated_at_enable.toLowerCase() : functionality.real_time_charts_last_updated_at_enable;
    chartObject.transition_duration = options.transition_duration ? options.transition_duration : functionality.transition_duration;

    if(options.credit_my_site_name || options.credit_my_site_url) {
        chartObject.credit_my_site_name = options.credit_my_site_name ? options.credit_my_site_name : "";
        chartObject.credit_my_site_url = options.credit_my_site_url ? options.credit_my_site_url : "";
    } else {
        chartObject.credit_my_site_name = stylesheet.credit_my_site_name;
        chartObject.credit_my_site_url = stylesheet.credit_my_site_url;
    }
    chartObject.data_source_name = options.data_source_name ? options.data_source_name : "";
    chartObject.data_source_url = options.data_source_url ? options.data_source_url : "";
    chartObject.export_enable = options.export_enable ? options.export_enable.toLowerCase() : stylesheet.export_enable;

    chartObject.k = new PykCharts.Configuration(chartObject);

    chartObject.k.validator().validatingSelector(chartObject.selector.substring(1,chartObject.selector.length))
                .isArray(chartObject.axis_x_pointer_values,"axis_x_pointer_values")
                .isArray(chartObject.chart_color,"chart_color")
                .validatingDataType(chartObject.width,"chart_width",stylesheet.chart_width,"width")
                .validatingDataType(chartObject.height,"chart_height",stylesheet.chart_height,"height")
                .validatingDataType(chartObject.margin_left,"timeline_margin_left",mapsTheme.timeline_margin_left,"margin_left")
                .validatingDataType(chartObject.margin_right,"timeline_margin_right",mapsTheme.timeline_margin_right,"margin_right")
                .validatingDataType(chartObject.margin_top,"timeline_margin_top",mapsTheme.timeline_margin_top,"margin_top")
                .validatingDataType(chartObject.margin_bottom,"timeline_margin_bottom",mapsTheme.timeline_margin_bottom,"margin_bottom")
                .validatingDataType(chartObject.title_size,"title_size",stylesheet.title_size)
                .validatingDataType(chartObject.subtitle_size,"subtitle_size",stylesheet.subtitle_size)
                .validatingDataType(chartObject.real_time_charts_refresh_frequency,"real_time_charts_refresh_frequency",functionality.real_time_charts_refresh_frequency)
                .validatingDataType(chartObject.transition_duration,"transition_duration",functionality.transition_duration)
                .validatingDataType(chartObject.border_between_chart_elements_thickness,"border_between_chart_elements_thickness",stylesheet.border_between_chart_elements_thickness)
                .validatingDataType(chartObject.legends_text_size ,"legends_text_size",stylesheet.legends_text_size)
                .validatingDataType(chartObject.axis_x_pointer_size,"axis_x_pointer_size",stylesheet.axis_x_pointer_size)
                .validatingDataType(chartObject.axis_x_pointer_length,"axis_x_pointer_length",stylesheet.axis_x_pointer_length)
                .validatingDataType(chartObject.axis_x_pointer_padding,"axis_x_pointer_padding",stylesheet.axis_x_pointer_padding)
                .validatingDataType(chartObject.tooltip_position_top,"tooltip_position_top",mapsTheme.tooltip_position_top)
                .validatingDataType(chartObject.tooltip_position_left,"tooltip_position_left",mapsTheme.tooltip_position_left)
                .validatingColorMode(chartObject.color_mode,"color_mode",stylesheet.color_mode)
                .validatingLegendsPosition(chartObject.legends_display,"legends_display",stylesheet.legends_display)
                .validatingTooltipMode(chartObject.tooltip_mode,"tooltip_mode",stylesheet.tooltip_mode)
                .validatingXAxisPointerPosition(chartObject.axis_x_pointer_position,"axis_x_pointer_position",stylesheet.axis_x_pointer_position)
                .validatingFontWeight(chartObject.title_weight,"title_weight",stylesheet.title_weight)
                .validatingFontWeight(chartObject.subtitle_weight,"subtitle_weight",stylesheet.subtitle_weight)
                .validatingFontWeight(chartObject.axis_x_pointer_weight,"axis_x_pointer_weight",stylesheet.axis_x_pointer_weight)
                .validatingFontWeight(chartObject.legends_text_weight,"legends_text_weight",stylesheet.legends_text_weight)
                .validatingColor(chartObject.background_color,"background_color",stylesheet.background_color)
                .validatingColor(chartObject.label_color,"label_color",stylesheet.label_color)
                .validatingColor(chartObject.title_color,"title_color",stylesheet.title_color)
                .validatingColor(chartObject.subtitle_color,"subtitle_color",stylesheet.subtitle_color)
                .validatingColor(chartObject.axis_x_line_color,"axis_x_line_color",stylesheet.axis_x_line_color)
                .validatingColor(chartObject.pointer_color,"pointer_color",stylesheet.pointer_color)
                .validatingColor(chartObject.highlight_color,"highlight_color",stylesheet.highlight_color)
                .validatingColor(chartObject.saturation_color,"saturation_color",stylesheet.saturation_color)
                .validatingColor(chartObject.border_between_chart_elements_color,"border_between_chart_elements_color",stylesheet.border_between_chart_elements_color)
                .validatingColor(chartObject.legends_text_color,"legends_text_color",stylesheet.legends_text_color);

            if(chartObject.chart_color.constructor === Array) {
                if(chartObject.chart_color[0]) {
                    chartObject.k.validator()
                        .validatingColor(chartObject.chart_color[0],"chart_color",stylesheet.chart_color);
                }
            }

            if (chartObject.color_mode === "saturation") {
                try {
                    if(chartObject.total_no_of_colors < 3 || chartObject.total_no_of_colors > 9) {
                        chartObject.total_no_of_colors = mapsTheme.total_no_of_colors;
                        throw "total_no_of_colors";
                    }
                }
                catch (err) {
                    chartObject.k.warningHandling(err,"10");
                }
            }

            try {
                if(chartObject.onhover.toLowerCase() === "shadow" || chartObject.onhover.toLowerCase() === "none" || chartObject.onhover.toLowerCase() === "highlight_border" || chartObject.onhover.toLowerCase() === "color_saturation") {
                } else {
                    chartObject.onhover = mapsTheme.onhover;
                    throw "chart_onhover_effect";
                }
            }
            catch (err) {
                chartObject.k.warningHandling(err,"12");
            }

            try {
                if(!_.isNumber(chartObject.default_zoom_level)) {
                    chartObject.default_zoom_level = 80;
                    throw "default_zoom_level"
                }
            }

            catch (err) {
                chartObject.k.warningHandling(err,"1");
            }

    chartObject.timeline_duration = (chartObject.timeline_duration * 1000);

    return chartObject;
};