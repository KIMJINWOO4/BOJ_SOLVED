#include <stdio.h>

int main(void)
{
	int i, j = 4;

	scanf("%d", &i);
	int tmp[i + 1];
	tmp[0] = 0;
	tmp[1] = 0;
	tmp[2] = 1;
	tmp[3] = 1;
	while (j <= i)
	{
		tmp[j] = tmp[j - 1] + 1; // + 1회의 횟수
		if (j % 2 == 0)
		{
			if (tmp[j] > (tmp[j / 2] + 1))
				tmp[j] = tmp[j / 2] + 1;
		}
		if (j % 3 == 0)
		{
			if (tmp[j] > (tmp[j / 3] + 1))
				tmp[j] = tmp[j / 3] + 1;
		}
		j++;
	}
	printf("%d",tmp[i]);
	return 0;
}