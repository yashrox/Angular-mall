import { clothmodel } from './cloth.model'
import {Injectable} from '@angular/core'
import {Subject} from 'rxjs/Subject' ;
import {HttpClient,HttpParams } from '@angular/common/http'
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {Observable } from 'rxjs/Observable';
//import {Subject} from 'rxjs'

@Injectable()
export class boycloth {
    constructor( private httpClient : HttpClient , private router : Router )  {}

    arrchange = new Subject<clothmodel[]>() ;
    
    private boysection : clothmodel[] = [
                
        new clothmodel('nike' , 'https://farm3.staticflickr.com/2056/2469523084_96d4384555.jpg' , 
                        'this is nikey special edition ; new brand cotton tshirts with round collar' , 400),
        new clothmodel('addidas' , 'https://farm6.staticflickr.com/5519/11747160164_db99a05d37.jpg' ,
        "  ADDIDAS new brand " ,550),
        
         new clothmodel('nike' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5OA9z5Je4Bl4VA-xfK-tuRo1OKgx1hC_qkKmFVgIYm5Oujikrw' , 
                        'this is nikey special edition ; new brand cotton tshirts with round collar' , 400),
        
          new clothmodel('nike' , 'https://farm3.staticflickr.com/2608/4027513861_dd91bddcd5.jpg' , 
                        'this is nikey special edition ; new brand cotton tshirts with round collar' , 400),
                          new clothmodel('nikey' , 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhMWFhUXFRYYFxcVGBcSFxcVFRUXFxgYFxcYHSghGBolGxcWITIiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQFy0lHR8tLS0rLS0rLS0tLS0tLTUtLS0tLSsrLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS03LS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAwQCBwEFBgj/xABHEAABAwIDBAYIAgcFCAMAAAABAAIRAyESMUEEIlFhBTJxgZHwBgcTQnKhscFS4RQjYpKz0fFTgqKywiUzNUNUZKPiY4OT/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAmEQEBAAICAQQCAQUAAAAAAAAAAQIRAzEhEiIyQQRRoTNCYXGB/9oADAMBAAIRAxEAPwDeKIiAiIgIiICIiAi6/pfpihszPaV6jWN55nk0C5PYtW+k3rce6WbEzAP7WoAXdrWZDvnsUzG1W5SNk+k/pJs+w0XVq7oAaSGi73kaNH3yWkdr9cPSFSoX0zTpMndp4A+B+051yeYheZ6f26rVZjrPdUfUfvOeS4w3IXyE6Cy6jYmtmCB9Por+nSnq3G0Nj9cG3Dr0aD+wOafk5di31y1v+jaTyqOHywrWB6NZmCRbl91Ps/QVRzS8ElgMEuLQ0EQc3GNQr+mfpT1/5ey6U9bm3OsxtKiOQxu8XyPkvMU/SXbX1RtB2irjad1xc6x1gG0cohdY7YGtJ3pyy3RbsAWNWtoPl9lMxRbtuz0U9ZBeA3bWBkgRVZMHm5nujmPABbFoV2vaHMcHNIkFpBBHIhfKezdI1GWDpHB1x2cRqvS+jXpxU2d+44svvMO9TdzI07bHmq5YT6TjyZTt9FovK+jfpxs+1ANJFOodHHdcf2XfYwe1eplZWa7bzKXpyiIoSIiICIiAiIgIiICIiAiIgIi63p7pilstF1WqYAsAM3OOTWjihbpb2za2UmOfUe1jGiS5xDQBzJWr/Sr1rkE09haOHtqg5xLKZ56u8F5L0s9I9o2101HYaQJw0wS1jRvN3jq4EDePyleeqUfG/Licu1uqvJPthlyfpjt/SFWu/wBpWqOqOOrjiMWJA4DOwsoGs830F/59ylFE6d2uUG3Gxy8VM2hxIjjmNWkyOsQHNNrjgr+pntT6Tok0hAnA7S9jM5a2PcCukp1IIXrSyLm3GY3TO8IsJa/3eD5wrh2zMPWYCZ1DQZI6sltiRvMcdQQGlV2mZaijQdIC7Da9oBbGBrIAJMEuwwACTGROo1lIiwtO7YBskbpAmMFQWlpMGbkZKCo2x0zJiRBc0zaJpuMZRDtMIVryKRRrk30z1BjKBI+uRy4qANv/AE0HnlwMK7Uo87SY4XMEtgweqRuug5ARnEaGmvDXMWAjjDeqbg6BPUt4VnNt54cctePguHsxdunnP3uCttoz9AZGZJAGI2mcRvhyJ4LL9H+ombXdMA4urIAjFIi5Ki5J2p7LtVSmZBI+bTlYhbE9EvWbXoQysPaU8oJu28bjzeORkcwvB1KUDw+jTBEyLA57pE4QsG2yUzzEb1dx9PdA+kOz7WzFReCYlzTZ7e1vDmLLtQV8q9HdKVaFQPpuc0gzumPBbz9AfTgbWBSrQK0S0izagGdtHDUf0VMsNeY2x5N+K9wiBFRqIiICIiAiIgIiICIiDgrR3rA6fO07U5od+qpOLGcLWc/vOvABbV9NukTQ2KtUaYdhwtPBzyGgjmJnuWgqF3gc/Ook961453XPzZf2pDleBGZHGKc3m2fFuccGrF7I+Z/dNQm3KP8A2bkrz6RNznxvNyDYuIPV/a1blLlCGxw0JA1MTG7E5VQDI0Iwi5x2yVnU4niO64MDFNgMTG5/izXDc7cswZIghoIzgglh6wkcwpyzQSdLWmWgnDlvOYGvERJaRDs1FFtCIkn3YMXiIwOtmGkOI4K0qXLTF7iBmLuAaCOI3mjE0tlmIBpgrEgCLDI2G8MAJLsItipktflhLZzKzyvwE3vZpAFwT72Foexws2+axqtsdQZ1BDiMLMX4XOku3hDuaCLIG9oAmQRAsAXRhIltg8CNJzUb8x4DPXDIbJnJ+TXknWMlYDSXDOSbZ4jNV4MXDnZ+693NyjpUrSIuALWB3adiQAM9HtwcXFNoQhvHhLtDENkkgSBd+8WuAFhK4DJAETIEAAGd0ZMmHdYxhIc0AkiVa9l8jPCDeHR7mYiq39WLWWXsA7MAzmHkAGcBioQ4QNRWHXMDJRsVmtm4vIMYd4uAGHdObm26jhIa08VJTYNDkJEXGGJxQJLqZu57CLCArP6EXTZzpOTrPecR3Xbpw17Z/gHNZmgcyQRd2KIBkhoqhrj7zhhc2Oq1Sh02104IERAGdzBAPWgEgiCJyBA0UQYrW0UxidlmQYIIkWMEWiZiNFwGLpxng2pVaa7HoHbHU3gscWuaQ9pGhHkfNUK1STAHnj2LKi7CQeB+WvyRL6d9HukxtOz06wtibccHizh3EFdktceqLpO1XZycoqM7Duv7pwH+8Vsdc+U1dOvDLc2IiKqwiIgIiICIiAiIg8T63a2HYQPxVmDwDnf6VpjZiPaN4GdQMwdTZbd9czj+i0eHtvn7N8fdaYpbRhqNOgdykcRftK3x+Dl5fk9C1+gjui86Qw5HE1sRk54zhYvdOp7ZdOjsQ4nqVOZDomWBSPaDcn7zNid78pIbGQUPZx93id6wNpuXDQhzhlijk0pHaejXQn6VWwGzGiakGd0mQ0EHIuOJrriC7rRKpO6L2gvIbRqY5cQGscIdMWzNK5eYLg0wDGS770O6fp7L7QVGkh5bBZES0nd3iMM45wuII5AgDsdv9PajiG0KYbJbBfvuMkg4WDrZZtxBcWWf5U5rMcN4/W/C/s9O7fLz9P0O2iMdT2dCm0g4qzw2GsFpDSS0k3MPCq1dn2SkcIc/aKm6C6DQpy52LFuj2tYWnJ1tclFtu3Vq0uq1HPOCCSYDS98QcMBltHQoHMz0BMid1v8AZsNiAPeOJrnDiF1Y8XLf6mX/ACeP57UuU+mPWM4QJh2FjWkQBUcbEltQRE+0cHCbBc06fVzMgAEA1C4N9mD7PEAa4GF00nQ0XzUpZxsCR1oAvAbJcAxpwNJbUa0neWRpkzIJL8wcRe4jOR1nVmGp+y1wattI2rezAAJgAAXAZUAG5Lm61mWcHUgMLL8FidlfkG3EMIMVAHYbU3loPtGuLAWRZhPerwEycUHMuBADcdg8lginTd7QNfTbeVywkWDSbEBmTsEh1Si0EnA0YnOa8iTCaNqH6PUvIcReZnGQHAneLb12TvOywq1RY8EyWgy/qljW4w0Yi2G/7t9OzRxlKocSILsRLQC2GhxgtaWjdIpvAwvOpVOttVWmMQcS2GlpOJsYZdTJBmzSHMAm9uaQUKwGJ0WGIkA3gTYTqq20PtHk8larEEkiYJkTEw64mLTBCiY2XTo2w7dfDLxXb3EMKdCBzUNRqvOVMmTKJlev9AOkTS2rZ3zZzhTdzFT9X/mLT3LfYXzL0c84ThzaSQeBgEfNfSXR20irSp1Bk9jXjsc0O+6w5Z5lb8N7iyiIsm4iIgIiICIiAiIg8T63aOLYJ/DVYfGW/wCpaD21vz+fZz4L6F9aTZ6Oq8nUz/5GrQu0Ug4EHzwW/H8XNy+Mna9G7T7Sm0zpB03hY9nLu5q8Kc95jIcZIDTY3PUJBBIixK8z0BteGoabveuDxI/L6L1dJ8g9gBjUX7fdLswYgX0FLj5ZZeGHsiZ4x+04wS4gfjIJw2cHSbmyybQHcXDg4OIeDH4ahh2RDAFYbkNeGUEnKLwCYAsQQ1nNZjjyieIgwDN8O6Ipu63FNKbVWsiDPVgA8CMZgOuWG2TQW81kKEG0gi0gQ4ECHGBcOgPJaXQ6ZCslt9dW5XF7tgXFjeiPFYYRGQgQIkQJggYjus97CQCQbFQlCylwA4EC4h0S0lgcTTcMLRvWJKk9jmCTJF/xbpIktaS4vY4uO8btCVCbEkci7q3ME75AwlxMgNsWyojVIIFw20G5iLAkANbib1TJuKkqdI2sFlwLTJhsAgOcJLWt6rGva4EEgwWqIxGdjhuZI1NJzzm9wl1MgNi0KptO0kbsQIvFwAXX3W23HkkFzsnBUtsrucJBzB1G6XSSLCGgVWyA0TDs00lY2yu1wI0IyOmK4DsMgBtRphkDrLq6lMTjY8i8xNuu2pcttMPOloUdSXHELgEOGYIBcypa8jN95JKqOp+6ZBgN+T2RocwLZcVGl4UqmBsEg4Qco0JbaOzW6yoVnQ1o4STwn+ao9I1JLIPWe065PdOue9jHNdmCGAnjqeQ+gC247synjZXqWDQZJMefquXtDR2fMqOk333ZmzRrf7lczJk5D6/kr1EXui7YhzH0W9/V1tGPo7Zv2Wez/wDzcWfRoWhuinTjPZ91uL1QbTOyVaf9ntFQdzw1/wBXFZcs9rThvur3aIiwdQiIgIiICIiAiIg8r6zXAdHVZ40/4jVoaqL/ACW/vWJTc7YKrWtc4nBZoLjAqNJMDgFoHa6UE/QjyV0cXTm5vk68Wq0zwePAmCvWUDuidTfXhzN948DzleLrkh7fibx4he2pWLZyBJ8BMX+EiLdia3WPJ40vGZ4nI8zaQSRMZNhwyDoKyB77G8BxIjOD1p4G7AogNM4Ea6TIvxOKRPvyFKL8TnlmTyMZmJJ1ZATTPbkj75ECwMw1+g1FTN2S5Hcf8Ih1+ymxwJj3sSxPj2A3BygRkfcGhCDxzy3ibb+HOXEQ7EbAghPSbcOE/wB7W4LiREmxe7FDmnISQVUrAOEOucrxMgGDvFxkjEDbMNVt8Xk2MhxBME2DjObz1H8M1XqtMnQmxAtDp4Ny32kXPvhToVDvDC++HjOUBpIxAC7CwzBO6CqBlrocbE2OQDjqCYA32DIe8bq69omfw2MRdkT7oJ6jzr7vJYVaQMtcb3vrpJ1NnBrtNU0bda6nF22sCW5bomTHwONyCZaULgd14vBB0yiYEjTC8DUhTOY4GCIe2SIE5dYRcki53j1SVhWYCLWziCJEXEHi2Zxe8LKNNJXmennRBETinTPM5ZgmDyuF3dOmDB0sb+IHYP5cF57poSQJFzHITw4NvMaL0zWOjMDsv9U4+6vn8Y4wanu7P5lR1hplx7OCzdT1kntVapAOi0qsXeja7BilwGWvatp+pfaA79MDSCMdF1ubHD/StQMpPd1GPd8LXO+gW1vUhsVam7aTUpVGNc2lhL2OYCWmpMYgJzCy5L7dNePH3bbXRAiwdIiIgIiICIiAiIg4Vbauj6NS1SlTf8bWu+oVpEHmtq9A+jH3Ox0Z4tbg/wAsLURbhe4H3SR3NMnPP3hC+gStBbZarV+N4PZjkiNZt+8VtxduX8idDHRA1gcZn6jeaOEHtUtO4ym2QzjOBYwco5NIVXzxuY7sw7u7FMx9s+epjnwtf98rZy6TPP1JkWmc3C1pzHDCVxitp/psTA13A4PEWmVi93KL3EEdosdDuD4iuA7gb5zzGRkftMgA8UNFR4HYRHA4YgSdBgeLCeqsbkR8o1NrNyG+zX8WS4qxB4D8+4uwOPZCptqQSHHOQTmJsD8RkNdwuVKUrswRcCM7iDJbOTRYub3ZKKo3DBGQgicsOQnIa4T2FSOqTnmJka8XAHJsEYhA1WNV/ZxnS9i69y115tYqBDtABGsDLju5cBiaIGsgrrtokT3cgb5gnTMg5DJXXPIniIzz4gTcggxDrTCoVqk9h7BfvsHQLg5yoq+LoNroY3EnTtFznbQq8dtdpCiqj6+c7+KwVJ4b9t4+rT0Y2KvsFHaKuztfUcagcX4nAllV7BDSYFmjIL3WzdC7NT6mz0W/DTYPoF5v1Qf8KofFX/j1F7NY5W7b4yaYtaBkI7LLmFyiqsIiICIiAiIgIiICIiAiIg4K0N003DtO0N4VnxyhxIJ7JnwW+StIem1LBt20C16gd+81rr8r3WvD2w/Inh1Dj5MeZ49p4qVrrXvrc95HfB8VWLu379/P+TVMx1vymcjn3N8V0ONJPZbgeFp7zdcg9x05ERFxwgD+8orcv6W/Ncg+RPnn3KRn2dgvxu0T4glU9qZqOFuwfQDI8QrR8dNdTl35qKoZ+vh73dkQggc+QHDstnaLDg4XgnMLlj/nqNcgSNXay1V6LoLmaG+ZiOfLhwyXDn4Z+c2vpiPunmM1CWO1viw4ZZjjlqLi2YVGo6fM2nKTmLawVnVJm/I/TQZdrVET5z05D6iVVpIo7Rn/AF+6jCk2g38PpyUbVStI+h/U/wD8Lo/HX/j1F7ReL9T4/wBlUfjr/wAd69osL26Z0IiKEiIiAiIgIiICIiAiIgIiIC0t6yDG31f/AKz3+zZ49i3StHesKrPSFfkWDwpsGa14fkx5/i6Bx8+cz/IKxSdbn4efzCpF3nz3KxRdbz2/n3LpcaZzwOzuyi3+GVx7TzP8uG93FRVDbz2/VRtd5896nSE7qom9v6ZeGR5rl337LjLsI+arVuPnj4ZWWVGpI8+SJTQrbZLSHDQ8OPL8RGmSh2l2RGX07Dp32V2u2QfPz+xXXUjm05jLs4DVVq+PlGXSPIHm2hUR8z+f81k+x7Vg7z5CqvFSvmsGrKt1iuG5rOtH0R6oh/suh8Vb+PUXsl5b1YUcHRmyjixzv36j3/depWN7dE6ERFCRERAREQEREBERAREQEREHBXz/AOl9fFtu0H/5nj904fsvoAr5u6Wq4q9Z3GrUPi8lbcPdYc/UVy5WaLrKkSrNEro+3LUrioJWbyoHOVlVmZHnyFWa/C7z5zWdNyh2oaomLjiqG20iDjb3qelUkKTNVTPFdXUAOWRy/koA7Q5hWq9LCYGWY5HgqlY3lUrWIa2ZWAC5qZlcadyzq+n1H6HbP7PYNkZqNnog9vs2z813Cg2GnhpsbwY0eAAU6wdIiIgIiICIiAiIgIiICIiAiIgwqugE8ASvmJz5cTxJPivpXpR8Uap4U3nwaSvmVhW3D9sOb6SOVik5VCbqzSK3jmqQlQvKlJUFVWpHNNylqCVVBVmmZCjZYqUXYXQVZNSFX21mqwa7E2+ihbRVr4lVeualIjJYzKqtEFXNYONj2FS1VE7I9ipV4+uNnMsb8I+ikVXop80aR402HxaFaXO6RERAREQEREBERAREQEREBERB1vpIY2TaDwoVf4bl81sX0j6VmNi2o/8Ab1v4bl820zZbcX2w5voBurVIqkDdW6RW0YVMoaqmUb1ZWeFaVPs71XejXwoWXKrZC627HLs2ukSoNoogpYiIHHUZH5KvUbqFIw4bHIrB+6eRVatFetoVGrNdoieagaq1ePqb0Zfi2PZjx2eifGm1dmuj9BqmLo7Yz/21EeFNo+y7xczqgiIgIiICIiAiIgIiICIiAiIg6T03fHR+1kf9PVHiwj7r5tDoEL6R9N6DqmwbS1kSaZzMDCILr/CCvnN+zTdpW3F0w5e0LTcq5SKgayBzKzpOW0Y1baVw5YtKzhWVU6pWMWWVdiwpvgwoTFnZKuhU54Lr37pkK3TqYhzTaLHFVrRmQO2ygNDEcLJcTk0A3OdjlkpnVHAtgAOE52z/AKKJ221mva4YJaZEg4dRkIJz04LPLK/Ua4THXmqVZjmy1wiDBEgwR2EhQDNXNpqFznPfBc65gRpFhJjvVNQn/T6T9WlXF0ZstwYpltr9V7mx22Xp1rP1F7eX7LWon/lVpHw1Gz/ma7xWzFhe3Rj0IiKEiIiAiIgIiICIiAiIgIiIIdr2dlRjqb2hzHAtc05FpEEHuWs/SL1UC79iqYT/AGVQkt/uvzHYZ7VtJFMtnSuWMy7fM/THRm07K6NqoOZoHESw9jhuk96pU61M5OX1FVphwLXAEHMESCOYK8p0x6uOjq8/qfZOPvUf1d+OHq/Jazl/bK8P6aOwg5EKRrSBBIXuek/U5VEnZ9oY8aNqtLD+82QfALzO3+rvpGnns7nDjTc2p8gZ+S0nJKyvHY6qpTJygqpVo2kA/cdyy2roHaKZ36VZnxMe36hQQ4e8Z7TKn1bRrSZuXFYjZXHj9FXuTn/iWJDuJ8Sm06dm2iYgie3RQ1NnI5fP5lUwX/iPiVJs/R9asYptfUPBjXVPomzTipgbYkeeSqiF6/ov1adI1v8AkGmPxVXCmP3RLvkvddAep+iyHbVVNQ/gpzTZ3u6zu7Cs7lGkxrofUNtDhte0074XUWuPAOY+GzwJDz4LdyqdHdHUqDBTo0202DJrAGjtMZnmVbWNu63xmoIiKEiIiAiIgIiICIiAiIgIiICIiAiIgIiIMXLznTiIrYss+2uum9fPFeZr5rlFvGNd16MddvxBbo6J/wB23sRFnyNOPtdREWTcREQEREBERAREQEREH//Z' , 
                        'this is nikey special edition ; new brand cotton tshirts with round collar' , 400),
        ]
    

        getboy(){
            return this.boysection.slice();
        }  
    
        setboy(value : clothmodel[] ){
            this.boysection = value ;
            this.arrchange.next(this.boysection.slice());
        }


        expandvalue( index : number ){
            return this.boysection[index];
        }
    
        boyarrchange(index : number , update : clothmodel){
            this.boysection[index] = update;
            this.arrchange.next(this.boysection.slice());
        }
    
        //newsection = this.boysection 
    
        boynew(value : any){
            console.log(value);
            //console.log(this.newsection);
            this.boysection = [ ...this.boysection ,   ...value ];
            console.log(this.boysection);
            
           // this.boysection.push(value);
            this.arrchange.next(this.boysection.slice());
        }
        
        onchange(index){
            this.boysection.splice(index, 1);
            this.arrchange.next(this.boysection.slice());
        }
    

//https request 

        onput(){
            const tokkens = this.tokkenvalue();
           return this.httpClient.put('https://angularmall.firebaseio.com/boycloth.json?auth=' +tokkens ,
            this.getboy() , )
        }
    
        onget(){
            
            const tokkens = this.tokkenvalue();
            
            return  this.httpClient.get<clothmodel[]>('https://angularmall.firebaseio.com/boycloth.json?auth=' +tokkens ,
            )
            .subscribe((boydata) => { 
                console.log(boydata);
                this.setboy(boydata) });
        }

    
    
//firebase configuration

   
   
       
   
    register(email : string , password : string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch( error => console.log(error) )
        
        this.router.navigate(['/home'])
        
    }
    
    tokken : string 
    
    
    
    login(email : string , password : string) {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((response) => {
            //this.router.navigate(['/home'])
            console.log(response);
            firebase.auth().currentUser.getIdToken(true).then(          
                (token) => {this.tokken = token;
                    console.log(this.tokken);
                    alert("tokken generated!!")
                }  
                )
        }).catch( Error => console.log(Error)  )
  
        console.log(this.tokken);
    } 
    
   
    
    
                tokkenvalue() {
                
                firebase.auth().currentUser.getIdToken(true).
                then( (token) => this.tokken = token);
                console.log(this.tokken)
                return this.tokken ;        
        }
    
    
        logout(){
            firebase.auth().signOut();
            this.tokken =  null;
            this.router.navigate(['/home'])
        }
    
    
    
     
        isAuthenticated() {
          return this.tokken != null ;
        this.router.navigate(['/home']);
            
        }
    
}



//for force refresh it is true;