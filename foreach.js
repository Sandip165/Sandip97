function sort()
{
	var tmp=0,i,j;
	var r=[3,5,8,1,2];
	for(i=0;i<=5;i++)
	{
		for(j=i+1;j<=5;j++)
		{
			if(r[i]>r[j])
			{
				tmp=r[i];
				r[i]=r[j];
				r[j]=tmp;
			}
		}
		
	}
	for(i=0;i<=5;i++)
		{
			console.log(r[i]);
		}
}

sort()


var n=[1,2,3,4,5];
n.foreach(function(param,k,ar)
{
	for(var i=0;i<n.length;i++){
	for(var j=i+1;j<n.length;j++)
	{
		for(j=i+1;j<=5;j++)
		{
			if(r[i]>r[j])
			{
				tmp=r[i];
				r[i]=r[j];
				r[j]=tmp;
			}
		}
	}
	for(i=0;i<=5;i++)
		{
			console.log(r[i]);
		}
	}
});




var n=[1,2,3,4,5];
varb a=n.map(function(param,k,ar)
{
	for(var i=0;i<n.length;i++){
	for(var j=i+1;j<n.length;j++)
	{
		for(j=i+1;j<=5;j++)
		{
			if(r[i]>r[j])
			{
				tmp=r[i];
				r[i]=r[j];
				r[j]=tmp;
			}
		}
	}
	for(i=0;i<=5;i++)
		{
			console.log(r[i]);
		}
	}
});
