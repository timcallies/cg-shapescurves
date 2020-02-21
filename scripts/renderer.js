class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        this.drawRectangle({x: 100, y: 100}, {x: 600, y: 200}, [60,241,130,255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        this.drawCircle({x:300,y:300}, 100, [342,54,88,255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        this.drawBezierCurve({x: 100, y: 100}, {x: 300, y: 400}, {x: 500, y: 0}, {x: 400, y: 200}, [100,0,0,255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        let color = [0,0,0,255];
        //this.drawLine({x: X1, y: Y1}, {x: X2, y: Y2}, color, framebuffer);
        //this.drawCircle({x: X, y: Y}, RADIUS, color, framebuffer);
        //this.drawBezierCurve({x: X1, y: Y1}, {x: X2, y: Y2}, {x: X3, y: Y3}, {x: X4, y: Y4}, color, framebuffer);

        //Each character should be 30 x 50 caps, 30 x 40 lowercase, 10 for spacing

        //T, x=10
        this.drawLine({x: 10, y: 150}, {x: 40, y: 150}, color, framebuffer);
        this.drawLine({x: 25, y: 150}, {x: 25, y: 100}, color, framebuffer);
        
        //i, x=50
        this.drawLine({x: 65, y: 125}, {x: 65, y: 100}, color, framebuffer);
        this.drawLine({x: 65, y: 125}, {x: 60, y: 125}, color, framebuffer);
        this.drawLine({x: 60, y: 100}, {x: 70, y: 100}, color, framebuffer);
        this.drawCircle({x: 65, y: 135}, 2, color, framebuffer);

        //m, x=90C
        this.drawLine({x: 90, y: 100}, {x: 90, y: 140}, color, framebuffer);
        this.drawBezierCurve({x: 90, y: 130}, {x: 90, y: 140}, {x: 105, y: 140}, {x: 105, y: 130}, color, framebuffer);
        this.drawLine({x: 105, y: 130}, {x: 105, y: 100}, color, framebuffer);
        this.drawBezierCurve({x: 105, y: 130}, {x: 105, y: 140}, {x: 120, y: 140}, {x: 120, y: 130}, color, framebuffer);
        this.drawLine({x: 120, y: 130}, {x: 120, y: 100}, color, framebuffer);

        //C, x=170
        this.drawBezierCurve({x: 170, y: 125}, {x: 170, y: 155}, {x: 195, y: 155}, {x: 200, y: 140}, color, framebuffer);
        this.drawBezierCurve({x: 170, y: 125}, {x: 170, y: 95}, {x: 195, y: 95}, {x: 200, y: 110}, color, framebuffer);

        //a, x=210
        this.drawLine({x: 240, y: 100}, {x: 240, y: 130}, color, framebuffer);
        this.drawBezierCurve({x: 240, y: 130}, {x: 240, y: 140}, {x: 210, y: 140}, {x: 210, y: 130}, color, framebuffer);
        this.drawBezierCurve({x: 240, y: 130}, {x: 240, y: 120}, {x: 210, y: 120}, {x: 210, y: 110}, color, framebuffer);
        this.drawBezierCurve({x: 240, y: 110}, {x: 240, y: 100}, {x: 210, y: 100}, {x: 210, y: 110}, color, framebuffer);

        //l, x=250
        this.drawLine({x: 260, y: 100}, {x: 270, y: 100}, color, framebuffer);
        this.drawLine({x: 260, y: 150}, {x: 265, y: 150}, color, framebuffer);
        this.drawLine({x: 265, y: 150}, {x: 265, y: 100}, color, framebuffer);

        //l, x=290
        this.drawLine({x: 300, y: 100}, {x: 310, y: 100}, color, framebuffer);
        this.drawLine({x: 300, y: 150}, {x: 305, y: 150}, color, framebuffer);
        this.drawLine({x: 305, y: 150}, {x: 305, y: 100}, color, framebuffer);

        //i, x=330
        this.drawLine({x: 345, y: 125}, {x: 345, y: 100}, color, framebuffer);
        this.drawLine({x: 345, y: 125}, {x: 340, y: 125}, color, framebuffer);
        this.drawLine({x: 340, y: 100}, {x: 350, y: 100}, color, framebuffer);
        this.drawCircle({x: 345, y: 135}, 2, color, framebuffer);

        //e, x=370
        this.drawBezierCurve({x: 370, y: 120}, {x: 370, y: 140}, {x: 400, y: 140}, {x: 400, y: 120}, color, framebuffer);
        this.drawBezierCurve({x: 370, y: 120}, {x: 370, y: 95}, {x: 395, y: 95}, {x: 400, y: 110}, color, framebuffer);
        this.drawLine({x: 370, y: 120}, {x: 400, y: 120}, color, framebuffer);

        //s, 410
        this.drawBezierCurve({x: 410, y: 110}, {x: 410, y: 95}, {x: 440, y: 95}, {x: 440, y: 110}, color, framebuffer);
        this.drawBezierCurve({x: 410, y: 130}, {x: 410, y: 120}, {x: 440, y: 120}, {x: 440, y: 110}, color, framebuffer);
        this.drawBezierCurve({x: 410, y: 130}, {x: 410, y: 140}, {x: 440, y: 140}, {x: 440, y: 130}, color, framebuffer);
    }

    // left_bottom:  object ({x: __, y: __})
    // right_top:    object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawRectangle(left_bottom, right_top, color, framebuffer) {
        this.drawLine({x: left_bottom.x, y: left_bottom.y}, {x: left_bottom.x, y: right_top.y},color,framebuffer);
        this.drawLine({x: left_bottom.x, y: right_top.y}, {x: right_top.x, y: right_top.y},color,framebuffer);
        this.drawLine({x: right_top.x, y: right_top.y}, {x: right_top.x, y: left_bottom.y},color,framebuffer);
        this.drawLine({x: right_top.x, y: left_bottom.y}, {x: left_bottom.x, y: left_bottom.y},color,framebuffer);
    }

    // center:       object ({x: __, y: __})
    // radius:       int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, color, framebuffer) {
        const curve_radians = (2*Math.PI) / this.num_curve_sections;
    
        let pt0 = {
            x: Math.floor(Math.sin(0) * radius) + center.x,
            y: Math.floor(Math.cos(0) * radius) + center.y
        };
    
        for (let i = 0; i <= this.num_curve_sections; i++) {
             let angle = curve_radians * i;
    
             let pt1 = {
                x: Math.floor(Math.sin(angle) * radius) + center.x,
                y: Math.floor(Math.cos(angle) * radius) + center.y
             };
             this.drawLine(pt0,pt1,color,framebuffer);

             if(this.show_points) {
                this.drawPoint(pt0, color, framebuffer);

             }
             pt0 = pt1;
        }
    }

    drawPoint(pt,color,framebuffer) {
        let inverse_color = [
            (255-color[0])*.8,
            (255-color[1])*.8,
            (255-color[2])*.8,
            255
        ];
        for(let x = pt.x - 2; x < pt.x + 2; x++) {
            for(let y = pt.y - 2; y < pt.y + 2; y++) {
                this.setFrameBufferColor(framebuffer, this.getPixelIndex(x,y,framebuffer), inverse_color);
            }
        }
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // pt2:          object ({x: __, y: __})
    // pt3:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(pt0, pt1, pt2, pt3, color, framebuffer) {
        let tDelta = 1.0 / this.num_curve_sections;
        let t = 0;

        let c0 = null;
        let c1 = null;

        let inverse_color = [
            (255-color[0])*.6,
            (255-color[1])*.6,
            (255-color[2])*.6,
            255
        ];

        if(this.show_points) {
            this.drawLine(pt0,pt1,inverse_color,framebuffer);
            this.drawPoint(pt1, color, framebuffer);
            this.drawLine(pt2,pt3,inverse_color,framebuffer);
            this.drawPoint(pt2, color, framebuffer);

        }

        for(let i = 0; i< this.num_curve_sections; i++) {
            t += tDelta;

            if(i == 0) {
                c1 = this.getBezierPoint(pt0,pt1,pt2,pt3,t);
                this.drawLine(pt0, c1, color, framebuffer)
                c0 = c1;
            }
            else if(i == this.num_curve_sections - 1) {
                this.drawLine(c0, pt3, color, framebuffer)
            }
            else {
                c1 = this.getBezierPoint(pt0,pt1,pt2,pt3,t);
                this.drawLine(c0, c1, color, framebuffer)
                c0 = c1;
            }

            if(this.show_points) {
                this.drawPoint(c0, color, framebuffer)
            }
        }


    }

    getBezierPoint(pt0, pt1, pt2, pt3, t) {
        return {            
            x: Math.floor(((1-t)**3*pt0.x) + (3*(1-t)**2*t*pt1.x) + (3*(1-t)*(t**2)*pt2.x) + ((t**3)*pt3.x)),
            y: Math.floor(((1-t)**3*pt0.y) + (3*(1-t)**2*t*pt1.y) + (3*(1-t)*(t**2)*pt2.y) + ((t**3)*pt3.y))
        }
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawLine(pt0,pt1,color,framebuffer) {
        // Low slope
        if(Math.abs(pt1.y-pt0.y) <= Math.abs(pt1.x-pt0.x)) {
            if(pt0.x < pt1.x) {
                this.drawLineLow(pt0, pt1, color, framebuffer);
            }
            else {
                this.drawLineLow(pt1, pt0, color, framebuffer);
            }
        }
    
        // High slope
        else {
            if(pt0.y < pt1.y) {
                this.drawLineHigh(pt0, pt1, color, framebuffer);
            }
            else {
                this.drawLineHigh(pt1, pt0, color, framebuffer);
            }
        }
    }
    
    // Draws from 45 to 90 deg
    drawLineHigh(pt0, pt1, color, framebuffer) {
        let x = pt0.x;
        let y = pt0.y;
    
        let dx = pt1.x-pt0.x;
        let dy = pt1.y-pt0.y;
    
        let ix = 1;
    
        if(dx < 0) {
            ix = -1;
        }
    
        let A = Math.abs(dx);
        let B = -dy;
    
    
        let D0 = 2*A;
        let D1 = 2*A + 2*B;
    
        let D = 2*A + B;
    
        while(y <= pt1.y) {
            this.setFrameBufferColor(framebuffer, this.getPixelIndex(x,y,framebuffer),color);
    
            if(D<=0) {
                D += D0;
                y += 1;
            }
            else {
                D += D1;
                y += 1;
                x += ix;
            }
        }
    }
    
    // Draws slopes from 0 to 45 deg
    drawLineLow(pt0, pt1, color, framebuffer) {
        let x = pt0.x;
        let y = pt0.y;
    
        let dx = pt1.x-pt0.x;
        let dy = pt1.y-pt0.y;
    
        let iy = 1;
    
        if(dy <= 0) {
            iy = -1;
        }
    
        let A = Math.abs(dy);
        let B = -dx;
    
    
        let D0 = 2*A;
        let D1 = 2*A + 2*B;
    
        let D = 2*A + B;
    
        while(x <= pt1.x) {
            this.setFrameBufferColor(framebuffer, this.getPixelIndex(x,y,framebuffer),color);
    
            if(D<=0) {
                D += D0;
                x += 1;
            }
            else {
                D += D1;
                x += 1;
                y += iy;
            }
        }
    }

    setFrameBufferColor(framebuffer, px, color) {
        framebuffer.data[px + 0] = color[0];
        framebuffer.data[px + 1] = color[1];
        framebuffer.data[px + 2] = color[2];
        framebuffer.data[px + 3] = color[3];
    }

    getPixelIndex(x,y,framebuffer) {
        return 4*y*framebuffer.width + 4*x;
    }
};
